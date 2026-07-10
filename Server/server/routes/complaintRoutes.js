const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    addComplaint,
    getMyComplaints,
    updateComplaint,
    deleteComplaint
} = require("../controllers/complaintController");

router.post("/", authMiddleware, addComplaint);

router.get("/", authMiddleware, getMyComplaints);

router.put("/:id", authMiddleware, updateComplaint);

router.delete("/:id", authMiddleware, deleteComplaint);

module.exports = router;