const mongoose = require('mongoose');

const CreateBook = async (req, res) => {
    const bookModel = mongoose.model('book');
    const { title, author, ISBN, publicationDate, genre, price, stock, description, coverImage } = req.body;

    if (!title || !author || !ISBN || !genre || !price || !stock || !description || !coverImage) {
        return res.status(400).json({ status: "Failed", message: "All fields are required" });
    }

    const user = req.user;

    try {
        const newBook = await bookModel.create({
            title,
            author,
            ISBN,
            publicationDate,
            genre,
            price,
            stock,
            description,
            coverImage,
            user: user._id
        });
        res.status(201).json({ status: "Success", message: 'Book Added Successfully', book: newBook });
    } catch (error) {
        res.status(400).json({ status: "Failed", error: error.message });
    }

}

module.exports = CreateBook;