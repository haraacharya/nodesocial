const express = require('express')
const authController = require('../controllers/auth');
const validator = require('../validator/index')

const userController = require('../controllers/user');

const router = express.Router();


router.post('/signup', validator.signupValidator, authController.signup);
router.post('/signin', authController.signin);
router.get('/signout', authController.signout);

//if any req or url has userid in params, it will execute the userById method
router.param("userId", userController.userById)

module.exports = router;
