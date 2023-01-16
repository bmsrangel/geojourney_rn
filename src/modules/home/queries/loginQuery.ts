import {gql} from '../../../shared/utils/apolloClient';

export const loginQuery = gql`
  query Login($email: String!, $password: String!) {
    users(where: {_and: {email: {_eq: $email}, password: {_eq: $password}}}) {
      id
      first_name
      last_name
      email
    }
  }
`;
