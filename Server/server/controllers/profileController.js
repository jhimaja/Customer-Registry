const User = require("../models/User");
const Complaint = require("../models/Complaint");

const getProfile = async (req, res) => {

    try {

        const user = await User.findById(req.user.id).select("-password");

        const total = await Complaint.countDocuments({ user: req.user.id });

        const pending = await Complaint.countDocuments({
            user: req.user.id,
            status: "Pending"
        });

        const resolved = await Complaint.countDocuments({
            user: req.user.id,
            status: "Resolved"
        });

        res.json({
            success: true,
            user,
            total,
            pending,
            resolved
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });

    }

};

module.exports = { getProfile };