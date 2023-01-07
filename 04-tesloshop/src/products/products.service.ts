import { Repository } from 'typeorm';
import {
  Injectable,
  Logger,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private readonly logger = new Logger();

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
      this.handleExceptions(error);
    }
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: string) {
    return `This action returns a #${id} product`;
  }

  update(id: string, dto: UpdateProductDto) {
    return `This action updates a #${id} product ${dto}`;
  }

  remove(id: string) {
    return `This action removes a #${id} product`;
  }

  private handleExceptions(error: any) {
    console.log(error.code);
    if (error.code === 11000)
      throw new BadRequestException(`La llave title ya existe`);

    this.logger.error(error);
    throw new InternalServerErrorException('Help!');
  }
}
