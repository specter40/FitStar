const mongoose = require('mongoose');
const Schema = mongoose.Schema( {
    email: {
        required: true,
        type: String,
        unique: true,
        trim: true
    },
    password: {
        required: true,
        type: String,
        trim: true
    },
    username: {
        required: true,
        type: String,
        trim: true
    }

});

export default mongoose.model('User', Schema);