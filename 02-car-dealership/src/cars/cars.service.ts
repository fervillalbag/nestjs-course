import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { CreateCarDTO, UpdateCarDTO } from './dto';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private cars: Car[] = [];

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
    let carFound = this.getCarById(id);
    if (dto.id && dto.id !== id)
      throw new BadRequestException('Does not exist car');

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carFound = {
          ...carFound,
          ...dto,
          id,
        };
      }
      return car;
    });

    return carFound;
  }

  deleteCar(id: string) {
    const foundCar = this.getCarById(id);
    if (!foundCar) throw new NotFoundException();
    this.cars.filter((car) => car.id !== id);
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
