const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const NotFoundError = require('../errors/not-found-err.js');
const BadRequestError = require('../errors/bad-request-err.js');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports.getUsers = (req, res, next) => {
  User.find({})
    .then((users) => {
      if (!users) {
        throw new NotFoundError('Пользователи не найдены');
      }
      res.status(200).send({ data: users });
    })
    .catch(next);
};

module.exports.getUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Пользователь не найден');
      }
      res.status(200).json(user);
    })
    .catch(next);
};

module.exports.createUser = (req, res, next) => {
  const {
    name = 'Жак-Ив Кусто́',
    about = 'Исследователь Мирового океана',
    avatar = 'https://www.culture.ru/storage/images/7402348bcfde8ad237620a095b568c12/f33b1160f0b1e42a11f80583a84f5a9f.jpeg',
    email,
    password,
  } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => {
      if (!hash) {
        throw new BadRequestError('Пользователь не создан');
      }
      User.create({
        name, about, avatar, email, password: hash,
      }).then((user) => {
        res.status(201).send({
          data: {
            _id: user._id,
            name: user.name,
            about: user.about,
            avatar: user.avatar,
            email: user.email,
          },
        });
      }).catch((err) => {
        if (err.message.includes('unique')) {
          res.status(400).send({ message: 'Пользователь с таким email уже существует' });
        } else if (err.message.includes('email')) {
          res.status(400).send({ message: 'Неправильно указан email или пароль' });
        } else {
          res.status(400).send({ message: 'Что-то пошло не так' });
        }
        next(err);
      });
    }).catch(next);
};

module.exports.updateProfile = (req, res, next) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(req.user._id, { name, about }, {
    new: true, // обработчик then получит на вход обновлённую запись
    runValidators: true, // данные будут валидированы перед изменением
    upsert: true, // если пользователь не найден, он будет создан
  })
    .then((user) => {
      if (!user) {
        throw new BadRequestError('Данные пользователя не обновились');
      }
      res.status(200).json(user);
    })
    .catch(next);
};

module.exports.updateAvatar = (req, res, next) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(req.user._id, { avatar }, {
    new: true, // обработчик then получит на вход обновлённую запись
    runValidators: true, // данные будут валидированы перед изменением
    upsert: true, // если пользователь не найден, он будет создан
  })
    .then((user) => {
      if (!user) {
        throw new BadRequestError('Аватар пользователя не обновился');
      }
      res.status(200).json(user);
    })
    .catch((err) => {
      // eslint-disable-next-line no-underscore-dangle
      if (err._message) {
        res.status(400).send({ message: 'Неправильно указан url' });
      }
      next(err);
    });
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new BadRequestError('Неправильно указан email или пароль');
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            // хеши не совпали — отклоняем промис
            throw new BadRequestError('Неправильно указан email или пароль');
          }
          // аутентификация успешна
          const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
          return res.status(201).send({ token });
        }).catch(next);
    }).catch(next);
};
