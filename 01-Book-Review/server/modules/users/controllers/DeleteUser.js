const mongoose = require('mongoose');

const DeleteUser = async (req, res) => {
    const userId = req.parmas.id;
    const userModel = mongoose.model('user');

    try {
        const deletedUser = await userModel.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: "User Not Found" });
        }
        res.status(200).json({ status: 'Success', message: 'User Deleted Successfully' })
    } catch (error) {
        res.status(500).json({ status: "Failed", message: error.message });
    }
}

module.exports = DeleteUser;