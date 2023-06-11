import { gql } from '@apollo/client';

export const CREATE_BLOG = gql`
    mutation createBlog($message: String) {
        createBlog(message: $message) {
            _id
            message
        }
    }
`;