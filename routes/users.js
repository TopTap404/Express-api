var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User_info');

router.get('/', (req, res, next) => {
  User.find().exec()
  .then(users => {
      res.json(users);
  })
  .catch(err => {
      next(err);
  })
});

router.post('/', (req, res, next) => {
  User.create(req.body)
      .then(users => {
          res.json(users);
      })
      .catch(err => {
          next(err);
      });
});

router.delete('/:id', (req, res, next) => {
  User.findByIdAndDelete(req.params.id).exec()
  .then(users => {
      res.json(users);
  })
  .catch(err => {
      next(err);
  })
});

module.exports = router;
