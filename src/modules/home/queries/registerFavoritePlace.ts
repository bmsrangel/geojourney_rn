import {gql} from '../../../shared/utils/apolloClient';

export const registerFavoritePlace = gql`
  mutation InsertPlace(
    $date: String!
    $name: String!
    $description: String
    $coordinate: json
    $userId: uuid!
  ) {
    insert_favorite_places_one(
      object: {
        date: $date
        name: $name
        description: $description
        coordinate: $coordinate
        user_id: $userId
      }
    ) {
      id
      date
      name
      description
      coordinate
    }
  }
`;
