const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    student_id: {
        type: String ,
        match: [/^\d{8}\b$/,"ตรวจสอบว่ากรอกข้อมูลเป็นตัวเลข 8 ตัวหรือไม่"]
    },
    name: {
        type: String ,
        maxlength: 50
    },
    surname: {
        type: String , 
        maxlength: 50
    },
    telephone: {
        type: String ,
        match: [/^\d{10}\b$/,"ตรวจสอบว่ากรอกข้อมูลเป็นตัวเลข 10 ตัวหรือไม่"]
    },
    email: {
        type: String ,
        maxlength: 50
    },
    id_card: {
        type: String ,
        match: [/^\d{13}\b$/,"ตรวจสอบว่ากรอกข้อมูลเป็นตัวเลข 13 ตัวหรือไม่"]
    },
    createAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('User' , UserSchema)