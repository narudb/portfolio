const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth');

// Create user
router.post('/signup', authController.createUser);

// Check User
router.post('/signin', authController.checkUser);

module.exports = router;
