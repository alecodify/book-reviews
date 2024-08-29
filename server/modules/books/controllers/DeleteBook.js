const mongoose = require('mongoose');

const DeleteBook = async (req, res) => {
    const bookId = req.params.id;
    const bookModel = mongoose.model('book');

    if (!bookId) throw "bookId is missing";

    try {
        const book = await bookModel.findByIdAndDelete({ _id: bookId });
        if (!book) {
            return res.status(404).json({ error: "Book Not Found" });
        }
        res.status(200).json({ status: 'Success', message: 'Book Deleted Successfully' });
    } catch (error) {
        res.status(500).json({ status: "Failed", error: error.message });
    }
}

module.exports = DeleteBook;