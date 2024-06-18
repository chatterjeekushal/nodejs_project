// models/otpModel.js
const mongoose = require('mongoose');

const mailSender = require("../utils/mail_sender.js")


const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
    },
});



module.exports = mongoose.model('Otp', otpSchema)

