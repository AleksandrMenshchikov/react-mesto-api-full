const Card = require('../models/card');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .populate('owner').populate('likes')
    .then((cards) => {
      if (!cards) {
        throw new Error('Карточки не найдены в базе данных');
      }
      res.json(cards);
    })
    .catch((err) => next(err));
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => {
      Card.findOne({ _id: card._id }).populate('owner').then((result) => res.json(result));
    })
    .catch((err) => next(err));
};

module.exports.deleteCard = (req, res, next) => {
  Card.findById(req.params.id).populate('owner')
    .then((card) => {
      // eslint-disable-next-line eqeqeq
      if (req.user._id == card.owner._id) {
        Card.findByIdAndRemove(req.params.id)
          .then((result) => {
            res.json(result);
          })
          .catch((err) => next(err));
      } else {
        throw new Error('Попытка удалить чужую карту');
      }
    })
    .catch((err) => next(err));
};

module.exports.likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
    { new: true },
  )
    .populate('likes').populate('owner')
    .then((card) => {
      if (!card) {
        throw new Error('Не удалось поставить лайк карточке по данному id');
      }
      res.json(card);
    })
    .catch((err) => next(err));
};

module.exports.dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } }, // убрать _id из массива
    { new: true },
  )
    .populate('likes').populate('owner').then((card) => {
      if (!card) {
        throw new Error('Не удалось поставить дизлайк карточке по данному id');
      }
      res.json(card);
    })
    .catch((err) => next(err));
};
