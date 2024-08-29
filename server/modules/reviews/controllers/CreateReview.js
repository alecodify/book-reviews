const mongoose = require('mongoose');

const CreateReview = async (req, res) => {
    const { rating, comment, bookId} = req.body;
    const reviewModel = mongoose.model('review');
    const bookModel = mongoose.model('book');
    const userModel = mongoose.model('user');

    const user = req.user;

    try {
        const book = await bookModel.findById({ _id: bookId });
        const userReview = await userModel.findById({ _id: user._id });
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        const newReview = await reviewModel.create({
            rating,
            comment,
            book: bookId,
            user: user._id,
        })

        book.reviews.push(newReview._id);
        userReview.reviews.push(newReview._id);

        await book.save();
        await userReview.save();

        res.status(201).json({ status: "Success", message: 'Review Added Successfully', review: newReview });
    } catch (error) {
        res.status(400).json({ status: "Failed", error: error.message });
    }
}

module.exports = CreateReview;