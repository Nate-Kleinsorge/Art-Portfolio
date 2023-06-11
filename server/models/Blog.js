const { model, Schema } = require('mongoose');

const blogSchema = new Schema({
    message: String,
});

const Blog = model('Blog', blogSchema);

module.exports = Blog;