const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    user_name: String,
    password: String,
    createAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('User' , UserSchema)