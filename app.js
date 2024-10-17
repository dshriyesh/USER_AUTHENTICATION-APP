const express = require('express');
const path = require('path');
const connectDB = require('./config/database');

// Initialize the app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware for parsing incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Use authentication routes
app.use('/', require('./routes/auth'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
