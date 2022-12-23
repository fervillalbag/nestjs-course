import { Injectable } from '@nestjs/common';

import { BRAND_SEED } from './data/brand.seed';
import { CARS_SEED } from './data/cars.seed';
import { BrandsService } from '../brands/brands.service';
import { CarsService } from '../cars/cars.service';

@Injectable()
export class SeedService {
  constructor(
    private carsService: CarsService,
    private brandsService: BrandsService,
  ) {}

  populateDB() {
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillCarsWithSeedData(BRAND_SEED);
    return 'Seed executed';
  }
}
