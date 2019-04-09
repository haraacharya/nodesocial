const Post = require('../models/post');

getPosts = (req, res) => {
  const posts = Post.find().select('_id title')
  .then(posts => {
    res.status(200).json({
      posts: posts
    })
  })
  .catch(err => console.log(err));
};

createPost = (req, res) => {
  const post = new Post(req.body);
  console.log("CREATING POST: ", req.body);
  post.save().then(result => {
    res.status(200).json({
      post: result
    });
  });
};

module.exports = {
  getPosts,
  createPost
};
