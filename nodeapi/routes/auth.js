const express = require('express')
const authController = require('../controllers/auth');
const validator = require('../validator/index')

const router = express.Router();


router.post('/signup', validator.signupValidator, authController.signup);
router.post('/signin', authController.signin);
router.get('/signout', authController.signout);

module.exports = router;
