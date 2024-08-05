const mongoose = require('mongoose')
const { isEmail } = require('validator');

const userModel = new mongoose.Schema({
    username: {
        type: String,
        required: true},

    dateOfBirth: {
            type:  Date,
            required: true},

    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email'],
    
    } 
}
)

module.exports = mongoose.model('User', userModel)