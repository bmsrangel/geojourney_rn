import {ApolloClient, InMemoryCache} from '@apollo/client';
export {
  ApolloProvider,
  useQuery,
  useLazyQuery,
  gql,
  useMutation,
} from '@apollo/client';

const isDev = process.env.NODE_ENV;
const developmentUrl = 'http://10.0.2.2:8080/v1/graphql';
const productionUrl = 'https://right-mustang-74.hasura.app/v1/graphql';

export const apolloClient = new ApolloClient({
  uri: isDev ? developmentUrl : productionUrl,
  headers: {
    'x-hasura-admin-secret':
      'dP7Tl6eDrderB7zW3ciu5OSRhPK4VYeIRJcet3n91qJI9Z3EkVCnBVIcdPrcWN5A',
  },
  cache: new InMemoryCache(),
});
// export const apolloClient = new ApolloClient({
//   uri: 'https://right-mustang-74.hasura.app/v1/graphql',
//   headers: {
//     'x-hasura-admin-secret':
//       'dP7Tl6eDrderB7zW3ciu5OSRhPK4VYeIRJcet3n91qJI9Z3EkVCnBVIcdPrcWN5A',
//   },
//   cache: new InMemoryCache(),
// });
