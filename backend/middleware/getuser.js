const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv')
// dotenv.config()

const JWT_SECRET = ' iamagoodgi@rl'

const fetchUser = (req, res, next) => {
  // Get the token from the request header
  const token = req.header('auth-token');
  
  // If no token is found, respond with a 401 status (Unauthorized)
  if (!token) {
    return res.status(401).json({ error: "Token unavailable" });
  }

  try {
    // Verify the token using the JWT secret
    const data = jwt.verify(token, JWT_SECRET);
    
    // Attach the user's data to the request object
    req.user = data.user;

    // Move on to the next middleware/route handler
    next();
  } catch (error) {
    // If token verification fails, respond with a 401 status
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = fetchUser;
