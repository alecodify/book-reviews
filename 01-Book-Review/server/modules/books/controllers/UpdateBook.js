const mongoose = require('mongoose');

const UpdateBook = async (req, res) => {
    const bookId = req.params.id;
    const bookModel = mongoose.model('book');

    if (!bookId) throw "bookId is missing";

    try {
        req.body.updatedAt = new Date();
        const book = await bookModel.findByIdAndUpdate({ _id: bookId }, req.body, { new: true });
        if (!book) {
            return res.status(404).json({ error: "Book Not Found" });
        }

        res.status(200).json({ status: "Success", message: "Book Updated Successfully", book: book });
    } catch (error) {
        res.status(500).json({ status: "Failed", error: error.message });
    }
}

module.exports = UpdateBook;