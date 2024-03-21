var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Booking = require('../models/Booking');

router.get('/', (req, res, next) => {
  Booking.find().exec()
  .then(books => {
      res.json(books);
  })
  .catch(err => {
      next(err);
  })
});

router.post('/', (req, res, next) => {
  Booking.create(req.body)
      .then(books => {
          res.json(books);
      })
      .catch(err => {
          next(err);
      });
});

router.delete('/:id', (req, res, next) => {
  Booking.findByIdAndDelete(req.params.id).exec()
  .then(books => {
      res.json(books);
  })
  .catch(err => {
      next(err);
  })
});

router.put('/:id', (req, res, next) => {
    Booking.findByIdAndUpdate(req.params.id,req.body).exec()
    .then(books => {
        res.json(books);
    })
    .catch(err => {
        next(err);
    })
  });

module.exports = router;
