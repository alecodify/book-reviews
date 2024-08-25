const mongoose = require('mongoose');

const GetBook = async (req, res) => {
    const bookId = req.params.id;
    const bookModel = mongoose.model('book');

    if (!bookId) throw "bookId is missing";

    try {
        const book = await bookModel.findById({ _id: bookId }).populate({path: 'reviews', populate: {path: 'user', select: 'username'}}).populate('user', '_id username email');
        if (!book) {
            return res.status(404).json({ error: "Book Not Found" });
        }
        res.status(200).json({ book })
    } catch (error) {
        res.status(500).json({ status: "Failed", error: error.message });
    }
}

module.exports = GetBook;