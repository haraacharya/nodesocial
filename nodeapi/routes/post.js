const express = require('express')
const postController = require('../controllers/post');
const authController = require('../controllers/auth');
const validator = require('../validator/index')

const router = express.Router();


router.get('/', postController.getPosts);
router.post('/post', authController.requireSignin, validator.createPostValidator, postController.createPost);

module.exports = router;
