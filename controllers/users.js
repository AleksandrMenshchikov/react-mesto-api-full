const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports.getUsers = (req, res, next) => {
  User.find({})
    .then((users) => {
      if (!users) {
        throw new Error('Пользователи не найдены в базе данных');
      }
      res.status(200).send({ data: users });
    })
    .catch((err) => next(err));
};

module.exports.getUser = (req, res, next) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (!user) {
        throw new Error('Пользователь не найден с данным id');
      }
      res.status(200).json(user);
    })
    .catch((err) => next(err));
};

module.exports.getOwnUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        throw new Error('Пользователь не найден с данным id');
      }
      res.status(200).json(user);
    })
    .catch((err) => next(err));
};

module.exports.createUser = (req, res, next) => {
  const {
    email,
    password,
  } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => {
      User.create({ email, password: hash }).then((user) => {
        res.status(201).send({
          data: {
            _id: user._id,
            name: user.name,
            about: user.about,
            avatar: user.avatar,
            email: user.email,
          },
        });
      }).catch((err) => next(err));
    }).catch((err) => next(err));
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
        throw new Error('Не удалось обновить профиль по данному id');
      }
      res.status(200).json(user);
    })
    .catch((err) => next(err));
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
        throw new Error('Не удалось обновить аватар по данному id');
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

  let userMatched;

  User.findOne({ email }).select('+password')
    .then((user) => {
      userMatched = user;
      return bcrypt.compare(password, user.password);
    })
    .then((matched) => {
      // аутентификация успешна
      if (matched) {
        const token = jwt.sign({ _id: userMatched._id }, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');

        res.cookie('jwt', token, {
          maxAge: 3600000 * 24 * 7,
          httpOnly: true,
          sameSite: true,
        }).status(201).send({ userId: userMatched._id });
      }
      throw new Error('Неправильно указан email или пароль');
    })
    .catch((err) => next(err));
};
