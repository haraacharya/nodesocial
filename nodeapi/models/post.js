const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Title is required",
  },
  body: {
    type: String,
    required: "body is required",
  }
})

module.exports = mongoose.model('Post', postSchema);
