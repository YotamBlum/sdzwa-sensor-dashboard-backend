const router = require('express').Router();
const {PrismaClient} = require('@prisma/client');
const userController = require('../controllers/users');
const {user} = new PrismaClient();

// Register new user
router.post('/register', userController.newUser);

// Login user
router.post('/login', userController.loginUser);

module.exports = router;