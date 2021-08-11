import { gql } from '@apollo/client';

export const GET_TOPICS = gql`
    query getTopics($topic: String!, $first: Int!) {
        topic(name: $topic) {
            name
            relatedTopics(first: $first) {
                name
                stargazerCount
                stargazers(first: $first) {
                    nodes {
                        avatarUrl
                        name
                    }
                }
            }
            stargazerCount
            stargazers(first: $first) {
                nodes {
                    avatarUrl
                    name
                }
            }
        }
    }
`