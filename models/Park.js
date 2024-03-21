const mongoose = require('mongoose');

const ParkSchema = new mongoose.Schema({
    park_id: mongoose.Schema.Types.ObjectId,
    park_zone: {
        type: String,
        maxlength: 2
        },
    park_status : Boolean
    })

module.exports = mongoose.model('Park' , ParkSchema)