const mongoose = require('mongoose');

const GetReview = async (req, res) => {
    const bookId = req.params.id;
    const reviewModel = mongoose.model('review');

    try {
        const reviews = await reviewModel.find({ book: bookId }).populate('user', 'username');
        if (!reviews) {
            return res.status(404).json({ error: 'No reviews found for this book' })
        }

        res.status(200).json({ reviews });
    } catch (error) {
        res.status(400).json({ status: "Failed", error: error.message });
    }
}

module.exports = GetReview;