const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserShema = new mongoose.Schema({
    name: {
        type: String,
        required:  true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    CreatedAt: {
        type: Date,
        default: Date.now,
    },
})

UserShema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
})

const User = mongoose.model('User', UserShema);

module.exports = User;

