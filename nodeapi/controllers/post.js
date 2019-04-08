getPosts = (req, res) => {
  res.json({
    posts: [{title: "first post", body: "abcd"}, {title: "second post"}]
  });
}

module.exports = {
  getPosts
}
