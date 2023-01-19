import {Place} from '../types/place';

export const placesDecoder = (data: any): Place[] => {
  const placesData: any[] = data.favorite_places;
  const places: Place[] = placesData.map(
    ({id, date, name, description, coordinate, image_url}) => ({
      id,
      name,
      date,
      description,
      coordinate,
      imageUrl: image_url,
    }),
  );
  return places;
};
