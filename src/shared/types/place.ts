import {Coord} from './coord';

export type Place = {
  id: string;
  date: Date;
  name: string;
  description: string;
  coordinate: Coord;
};
