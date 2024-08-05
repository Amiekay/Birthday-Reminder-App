const mongoose = require('mongoose')


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
    
    } 
}
)

module.exports = mongoose.model('User', userModel)