import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(dto: CreateProductDto) {
    try {
      const product = this.productRepository.create(dto);
      await this.productRepository.save(product);
      return product;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Help!');
    }
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, dto: UpdateProductDto) {
    return `This action updates a #${id} product ${dto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
