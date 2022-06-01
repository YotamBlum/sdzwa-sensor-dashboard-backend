const router = require('express').Router();
const {PrismaClient} = require('@prisma/client');
const userController = require('../controllers/users');
const {user} = new PrismaClient();

// Register new user
router.post('/register', userController.newUser);

// Login user
router.post('/login', userController.loginUser);

// Get all admin users
router.get('/', userController.getUsers);

// Get an admin user by id
router.get('/id/:id', userController.getUserById);

// Get an admin user by email
router.get('/name/:name', userController.getUserByEmail);

// Get an admin user by name
router.get('/id/:id', userController.getUserByName);

//update user by email
router.put('/name/:name', userController.updateUserByEmail);

//delete new user by email
router.delete('/', userController.deleteUserByEmail);

module.exports = router;