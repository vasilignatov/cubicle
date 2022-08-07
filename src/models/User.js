const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: [3, 'Username must be more than 3 characters!']
    },
    password: {
        type: String,
        required: true
    }
});

let User = mongoose.model('User', userSchema);

module.exports = User;