const mongoose = require('mongoose');
const User = require("./User_info")
const start = new Date();
const end = new Date(start.getTime() + (1 * 60 * 60 * 1000));


const BookSchema = new mongoose.Schema({
    book_id: mongoose.Schema.Types.ObjectId,
    booking_start: { type: String, default: start.toLocaleTimeString() },
    booking_end: { type: String, default: end.toLocaleTimeString() },
    book_status : Boolean
    })

module.exports = mongoose.model('Book' , BookSchema)
