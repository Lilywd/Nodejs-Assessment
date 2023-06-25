const express = require('express');
const router = express.Router();
const  UserCtrl = require('../controllers/user.controllers')

// POST request  to register a new user.
router.post('/api/register', UserCtrl.registerUser)

// POST request to login user
router.get('/api/login', UserCtrl.loginUser)

module.exports = router;