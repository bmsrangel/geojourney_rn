import {gql} from '../../../shared/utils/apolloClient';

export const getPlacesByUserId = gql`
  query GetAllPlaces($userId: uuid) {
    favorite_places(where: {user_id: {_eq: $userId}}) {
      id
      date
      name
      description
      coordinate
    }
  }
`;
