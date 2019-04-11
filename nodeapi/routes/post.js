const express = require('express')
const postController = require('../controllers/post');
const authController = require('../controllers/auth');
const validator = require('../validator/index')

const router = express.Router();


router.get('/', authController.requireSignin, postController.getPosts);
router.post('/post', validator.createPostValidator, postController.createPost);

module.exports = router;
