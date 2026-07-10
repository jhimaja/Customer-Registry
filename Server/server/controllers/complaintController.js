const Complaint = require("../models/Complaint");

// Add Complaint
const addComplaint = async (req, res) => {
    try {

        const { title, category, description } = req.body;

        if (!title || !category || !description) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const complaint = await Complaint.create({
            user: req.user.id,
            title,
            category,
            description
        });

        res.status(201).json({
            success: true,
            message: "Complaint Added Successfully",
            complaint
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });

    }
};

// Get My Complaints
const getMyComplaints = async (req, res) => {
    try {

        const complaints = await Complaint.find({
            user: req.user.id
        });

        res.status(200).json({
            success: true,
            complaints
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });

    }
};

// Update Complaint
const updateComplaint = async (req, res) => {

    try {

        const complaint = await Complaint.findById(req.params.id);

        if (!complaint) {
            return res.status(404).json({
                success: false,
                message: "Complaint not found"
            });
        }

        if (complaint.user.toString() !== req.user.id) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            });
        }

        const updatedComplaint = await Complaint.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        );

        res.status(200).json({
            success: true,
            message: "Complaint Updated Successfully",
            complaint: updatedComplaint
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });

    }

};

// Delete Complaint
const deleteComplaint = async (req, res) => {

    try {

        const complaint = await Complaint.findById(req.params.id);

        if (!complaint) {
            return res.status(404).json({
                success: false,
                message: "Complaint not found"
            });
        }

        if (complaint.user.toString() !== req.user.id) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            });
        }

        await complaint.deleteOne();

        res.status(200).json({
            success: true,
            message: "Complaint Deleted Successfully"
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
    addComplaint,
    getMyComplaints,
    updateComplaint,
    deleteComplaint
};