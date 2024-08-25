const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    reviews: [{ type: ObjectId, ref: 'review' }],
})

const userModel = mongoose.model('user', UserSchema);

module.exports = userModel;