require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { celebrate, Joi } = require('celebrate');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const { createUser, login } = require('./controllers/users');
const auth = require('./middlewares/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

const { PORT = 5000 } = process.env;

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(limiter);
app.use(helmet());

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// настройка cors
const whitelist = ['https://mesto-app.website', 'http://mesto-app.website', 'http://localhost:3000'];
const corsOptions = {
  origin(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

app.use(requestLogger); // подключаем логгер запросов

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

// роуты, не требующие авторизации,
// например, регистрация и логин
app.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
  }),
}), createUser);
app.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
  }),
}), login);

// авторизация
app.use(auth);

// роуты, которым авторизация нужна
app.use('/users', require('./routes/users'));
app.use('/cards', require('./routes/cards'));

app.use('/signout', (req, res) => {
  res.clearCookie('jwt')
    .status(200)
    .send({ message: 'Успешный выход из системы' });
});
app.use('/*', require('./routes/pageNotFound'));

app.use(errorLogger); // подключаем логгер ошибок

// наш централизованный обработчик
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  // если у ошибки нет статуса, выставляем 500
  const { statusCode = 500 } = err;

  if (err.name === 'MongoError' && err.code === 11000) {
    res.status(409).send({ message: 'Пользователь с таким email уже существует' });
  } else if (err.message.includes('email')) {
    res.status(400).send({ message: 'Неправильно указан email или пароль' });
  } else if (err.message === 'celebrate request validation failed') {
    res.status(400).send({ message: 'Отправленные данные не прошли валидацию' });
  } else if (err.message === 'Попытка удалить чужую карту') {
    res.status(403).send({ message: err.message });
  } else if (err.name === 'CastError') {
    res.status(400).send({ message: 'Попытка удалить объект с невалидным id' });
  } else if (err.message === 'Пользователь с таким id не найден') {
    res.status(400).send({ message: err.message });
  } else if (err.message) {
    res.status(400).send({ message: err.message });
  } else {
    res.status(statusCode).send({ message: 'На сервере произошла ошибка' });
  }
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
