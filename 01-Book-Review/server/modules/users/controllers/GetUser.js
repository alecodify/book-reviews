const mongoose = require('mongoose');

const GetUser = async (req, res) => {
    const user_id = req.user;

    const userModel = mongoose.model('user');

    if (!user_id){
        return res.status(400).json({status: "failed", message: "Login First"})
    }

    const user = await userModel.findById({ _id: user_id._id }).select('-password -__v').populate({
        path: 'reviews',
        select: 'comment rating',
        populate: {
            path: 'book',
            select: 'title author description'
        }
    });
    if (!user) {
        return res.status(404).json({ status: "Failed", message: 'User Not Found' });
    }

    res.status(201).json({ user })

}

module.exports = GetUser;