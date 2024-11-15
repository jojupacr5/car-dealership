import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    model: "Corolla",
    brand: "Toyota"
  },
  {
    id: uuid(),
    model: "Honda",
    brand: "Civic"
  },
  {
    id: uuid(),
    model: "Jeep",
    brand: "Cheroke"
  },
]