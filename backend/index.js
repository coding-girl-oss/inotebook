// Importing dependencies
const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db');

// Connect to MongoDB
connectToMongo();

// Initialize express
const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/note'));

// Define the port (ensure the same port is used for requests)
const port = 5000;

// Start the server
app.listen(port, () => {
  console.log(`iNotebook backend is running on port ${port}`);
});
