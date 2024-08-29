const mongoose = require('mongoose');

const DeleteReview = async (req, res) => {
    const reviewId = req.params.id;
    const reviewModel = mongoose.model('review');

    try {
        const deletedReview = await reviewModel.findByIdAndDelete({ _id: reviewId });
        if (!deletedReview) {
            returnres.status(404).json({ error: 'Review Not Found' });
        }

        res.status(200).json({ status: 'Success', message: 'Review Deleted Successfully' });
    } catch (error) {
        res.status(500).json({ status: 'Failed', error: error.message });
    }
}

module.exports = DeleteReview;