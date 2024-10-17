const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const path = require('path');

// Register route
router.post('/register', authController.register);

// Login route
router.post('/login', authController.login);



// Serve the registration and login HTML pages
router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/register.html'));
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'));
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});
module.exports = router;
