import {gql} from '../../../shared/utils/apolloClient';

export const getPlacesByUserId = gql`
  query GetAllPlaces($userId: uuid) {
    favorite_places(where: {user_id: {_eq: $userId}}, order_by: {date: desc}) {
      id
      date
      name
      description
      coordinate
      image_url
    }
  }
`;
