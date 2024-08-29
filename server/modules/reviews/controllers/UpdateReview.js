const mongoose = require('mongoose');

const UpdateReview = async (req, res) => {
    const reviewId = req.params.id;
    const reviewModel = mongoose.model('review');

    try {
        const updatedReview = await reviewModel.findByIdAndUpdate({ _id: reviewId }, { ...req.body, updatedAt: new Date() }, { new: true });
        if (!updatedReview) {
            return res.status(404).json({ error: 'Review not found' });
        }

        res.status(200).json({ status: 'Success', message: 'Review updated successfully', review: updatedReview });
    } catch (error) {
        res.status(400).json({ status: "Failed", error: error.message });
    }
}

module.exports = UpdateReview;