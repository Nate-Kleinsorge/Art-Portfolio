const { Blog } = require('../models');

const resolvers = {
    Query: {
        blog: async () => {
            return Blog.find({});
        }
    },
    Mutation: {
        createBlog: async (parent, message) => {
            const blog = await Blog.create({ message: message });
            console.log(blog);
            return blog;
        },
    },
};

module.exports = resolvers;