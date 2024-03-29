const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String,
    },
    contactNumber:{
        type:Number,
        required:true,
    },
    gender: {
		type: String,
	},
	dateOfBirth: {
		type: String,
	}
})

module.exports = mongoose.model("users", userSchema);