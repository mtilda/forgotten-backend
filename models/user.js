const mongoose = require('../db/connection');

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        handle: { type: String, required: true },
        email: { type: String, required: true },
    }
)

const User = mongoose.model('User', userSchema)

module.exports = User