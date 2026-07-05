const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    try {

        // Get token from request header
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                message: "Access denied. No token provided."
            });
        }

        // Check Bearer token format
        const token = authHeader.startsWith("Bearer ")
            ? authHeader.split(" ")[1]
            : authHeader;

        // Verify JWT
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Save user id in request
        req.user = decoded;

        // Move to next function
        next();

    } catch (error) {

        res.status(401).json({
            message: "Invalid Token"
        });

    }
};

module.exports = authMiddleware;