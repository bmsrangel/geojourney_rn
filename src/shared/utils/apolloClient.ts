import {ApolloClient, InMemoryCache} from '@apollo/client';
export {ApolloProvider, useQuery, useLazyQuery, gql} from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'https://right-mustang-74.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret':
      'dP7Tl6eDrderB7zW3ciu5OSRhPK4VYeIRJcet3n91qJI9Z3EkVCnBVIcdPrcWN5A',
  },
  cache: new InMemoryCache(),
});
