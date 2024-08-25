const mongoose = require('mongoose');

const GetBooks = async (req, res) => {
    const bookModel = mongoose.model('book');

    try {
        const books = await bookModel.find({}).populate({path: 'reviews', populate: {path: 'user', select: 'username'}}).populate('user', '_id username email');
        if (!books) {
            return res.status(404).json({ error: "Books Not Found" });
        }
        const totalBooks = await bookModel.countDocuments({});
        res.status(200).json({ books, totalBooks })
    } catch (error) {
        res.status(500).json({ status: "Failed", error: error.message });
    }
}

module.exports = GetBooks;