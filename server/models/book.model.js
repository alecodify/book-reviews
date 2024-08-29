const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true, },
    author: { type: String, required: true, },
    ISBN: { type: String, required: true, unique: true, },
    publicationDate: { type: Date, default: Date.now },
    genre: { type: String, required: true, },
    price: { type: Number, required: true },
    stock: { type: Number, required: true, min: 0 },
    description: { type: String, required: true },
    coverImage: { type: String, required: true },
    reviews: [{ type: ObjectId, ref: 'review' }],
    user: { type: ObjectId, ref: 'user', required: true },
    updatedAt: { type: Date },
})

const bookModel = mongoose.model('book', BookSchema);

module.exports = bookModel;