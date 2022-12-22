import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCarDTO, UpdateCarDTO } from './dto';

import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), name: 'Toyota', brand: 'Corolla' },
    { id: uuid(), name: 'Tesla', brand: 'Model 3' },
    { id: uuid(), name: 'Nissan', brand: 'Primera' },
  ];

  getAllCars() {
    return this.cars;
  }

  getCarById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found!`);
    return car;
  }

  createCar(dto: CreateCarDTO) {
    if (!dto) return new NotFoundException();

    const newCar: Car = {
      id: uuid(),
      ...dto,
    };

    this.cars.push(newCar);
    return newCar;
  }

  updateCar(id: string, dto: UpdateCarDTO) {
    const car = this.cars.find((car) => car.id === id);
    console.log(car);
    console.log(dto);
  }
}
