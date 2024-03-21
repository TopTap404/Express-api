var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Park = require('../models/Park');

router.get('/', (req, res, next) => {
  Park.find().exec()
  .then(parks => {
      res.json(parks);
  })
  .catch(err => {
      next(err);
  })
});

router.post('/', (req, res, next) => {
  Park.create(req.body)
      .then(parks => {
          res.json(parks);
      })
      .catch(err => {
          next(err);
      });
});

router.delete('/:id', (req, res, next) => {
  Park.findByIdAndDelete(req.params.id).exec()
  .then(parks => {
      res.json(parks);
  })
  .catch(err => {
      next(err);
  })
});

module.exports = router;
