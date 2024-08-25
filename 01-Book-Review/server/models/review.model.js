const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

const ReviewSchema = new mongoose.Schema({
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    book: { type: ObjectId, ref: 'book', required: true },
    user: { type: ObjectId, ref: 'user', required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date }
})

const reviewModel = mongoose.model('review', ReviewSchema);

module.exports = reviewModel;