const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const SignUp = async (req, res) => {
    const userModel = mongoose.model('user');
    const { username, email, password } = req.body;

    if (!username) throw "UserName is Required";
    if (!email) throw "User Email is Required";
    if (!password || password === '') throw "User Password is Required";

    const ExistinUser = await userModel.findOne({ email: email });
    if (ExistinUser) throw "User Already Exist,Try to SignIn or Use another One";

    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = await userModel.create({
        username: username,
        email: email,
        password: hashedPassword,
    })

    const userData = { 
        _id: newUser._id, 
        username: newUser.username,
        email: newUser.email,
    }

    res.status(201).json({ status: "Success", message: "User Registered Successfully", user: userData })
}

module.exports = SignUp;