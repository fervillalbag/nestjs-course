import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDTO } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Tesla',
      created_at: new Date().getTime(),
    },
  ];

  create(dto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: dto.name.toLowerCase(),
      created_at: new Date().getTime(),
    };
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    return this.brands.find((brand) => brand.id === id);
  }

  update(id: string, dto: UpdateBrandDTO) {
    let brandDB = this.findOne(id);
    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brandDB.updated_at = new Date().getTime();
        brandDB = { ...brandDB, ...dto };
        return brandDB;
      }

      return brand;
    });

    return brandDB;
  }

  remove(id: string) {
    return this.brands.filter((item) => item.id !== id);
  }
}
