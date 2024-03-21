const mongoose = require('mongoose');
const User = require("./User_info")

const BookSchema = new mongoose.Schema({
    park_zone : {type : String, ref : 'User'}
    })

module.exports = mongoose.model('Book' , BookSchema)
