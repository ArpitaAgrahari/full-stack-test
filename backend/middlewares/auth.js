
// Import JWT library
const jwt = require('jsonwebtoken');

// Secret key for signing JWTs (store securely, e.g., in environment variables)
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

// Middleware to verify JWT token in request headers
module.exports = (req, res, next) => {
    // Check for the presence of Authorization header with 'Bearer' scheme
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Access Denied: No token provided' });
    }

    // Extract the token from the header
    const token = authHeader.split(' ')[1];

    try {
        // Verify the token with the secret key
        const decoded = jwt.verify(token, JWT_SECRET);
        
        // Attach the decoded user data to the request object
        req.user = decoded;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // Token is invalid or expired
        return res.status(401).json({ message: 'Invalid Token' });
    }
};
