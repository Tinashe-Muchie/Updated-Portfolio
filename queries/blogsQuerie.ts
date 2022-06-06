import { gql } from "@apollo/client";

export const BLOGS = gql`
    query MyQuery {
        blogs {
        id
        slug
        title
        dateAndTime
        coverPhoto {
            url
        }
        content {
            html
        }
        author {
            id
            name
            avatar {
            id
            url
            }
            blogs {
            title
            }
        }
        }
    }
`;