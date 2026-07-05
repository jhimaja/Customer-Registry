const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    title: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true,
        enum: ["Technical", "Billing", "Service", "Other"]
    },

    status: {
        type: String,
        default: "Pending",
        enum: ["Pending", "In Progress", "Resolved"]
    }

},
{
    timestamps: true
});

module.exports = mongoose.model("Complaint", complaintSchema);