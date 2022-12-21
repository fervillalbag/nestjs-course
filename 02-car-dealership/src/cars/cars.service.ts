import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  // constructor() {}

  private cars = [
    { id: 1, name: 'Toyota', brand: 'Corolla' },
    { id: 2, name: 'Tesla', brand: 'Model 3' },
    { id: 3, name: 'Nissan', brand: 'Primera' },
  ];

  getAllCars() {
    return this.cars;
  }

  getCarById(id: number) {
    return this.cars.filter((car) => car.id === id);
  }
}
