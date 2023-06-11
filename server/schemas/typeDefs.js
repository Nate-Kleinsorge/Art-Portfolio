const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Blog {
    _id: ID!
    message: String
}

type Query {
    blog: [Blog]
}

type Mutation {
    createBlog(message: String): Blog
}
`;

module.exports = typeDefs;