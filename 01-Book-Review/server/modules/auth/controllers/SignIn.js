const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwtManager = require('../../../managers/jwtManager');

const SignIn = async (req, res) => {
    const userModel = mongoose.model('user');
    const { email, password } = req.body;

    const getUser = await userModel.findOne({ email: email });
    if (!getUser) throw 'User Not Found';

    const comparedPassword = await bcryptjs.compare(password, getUser.password);

    if (!comparedPassword) {
        return res.status(400).json({ status: 'Failed', error: 'Invalid Password' });
    }

    const accessToken = jwtManager(getUser);

    const user = {
        _id: getUser._id,
        username: getUser.username,
        email: getUser.email,
    }

    res.cookie('accessToken', accessToken, { httpOnly: true }).status(200).json({ status: "Success", message: 'User LoggedIn Successfully', user: user });
}

module.exports = SignIn;