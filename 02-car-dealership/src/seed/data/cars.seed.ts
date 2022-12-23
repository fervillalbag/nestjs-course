import { v4 as uuid } from 'uuid';
import { Car } from '../../cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    name: 'Corolla',
  },
  {
    id: uuid(),
    brand: 'Honda',
    name: 'Civic',
  },
  {
    id: uuid(),
    brand: 'Tesla',
    name: 'Roadster',
  },
];
