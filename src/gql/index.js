import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const { REACT_APP_GITHUB_GRAPHQL_API, REACT_APP_GITHUB_API_TOKEN } = process.env;

const httpLink = createHttpLink({
    uri: REACT_APP_GITHUB_GRAPHQL_API,
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            Authorization: `bearer ${REACT_APP_GITHUB_API_TOKEN}`,
        }
    }
});
  
export const graphqlClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});