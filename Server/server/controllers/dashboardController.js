const Complaint = require("../models/Complaint");

const getDashboardStats = async (req, res) => {
    try {

        const total = await Complaint.countDocuments({
            user: req.user.id
        });

        const pending = await Complaint.countDocuments({
            user: req.user.id,
            status: "Pending"
        });

        const inProgress = await Complaint.countDocuments({
            user: req.user.id,
            status: "In Progress"
        });

        const resolved = await Complaint.countDocuments({
            user: req.user.id,
            status: "Resolved"
        });

        res.status(200).json({
            success: true,
            total,
            pending,
            inProgress,
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

module.exports = {
    getDashboardStats
};