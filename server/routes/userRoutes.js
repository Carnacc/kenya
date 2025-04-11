const express = require('express');
const router = express.Router();

// Importo le funzioni dal controller
const { registerUser, loginUser } = require('../controllers/userController');

// Rotta per registrazione -> /api/users/register
router.post('/register', registerUser);

// Rotta per login -> /api/users/login
router.post('/login', loginUser);

module.exports = router;
