const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/Product');

router.get('/', (req, res, next) => {
    Product.find().exec()
    .then(products => {
        res.json(products);
    })
    .catch(err => {
        next(err);
    })
});


router.post('/', (req, res, next) => {
    Product.create(req.body)
        .then(products => {
            res.json(products);
        })
        .catch(err => {
            next(err);
        });
});


module.exports = router;