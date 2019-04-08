const Post = require('../models/post');

getPosts = (req, res) => {
  res.json({
    posts: [{title: "first post", body: "abcd"}, {title: "second post", body: "abcdsdgesgewtewtvrtw rq wge wegw  ewtewgwe"}]
  });
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
