const mongoose = require('mongoose');

const GetAllUsers = async (req, res) => {
    const userModel = mongoose.model('user');

    const users = await userModel.find({}).select('-password -reviews -__v');
    if (!users) {
        return res.status(404).json({status: 'Failed', message: 'Users not found'});
    }

    res.status(201).json({users: users});
}

module.exports = GetAllUsers;