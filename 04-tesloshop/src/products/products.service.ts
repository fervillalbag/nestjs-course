import { isValidObjectId } from 'mongoose';
import { Repository } from 'typeorm';
import {
  Injectable,
  Logger,
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { StringToObjectID } from '../lib/ObjectIdTransform';
import { PaginationDTO } from '../common/dto/pagination.dto';

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

  findAll(pagDTO: PaginationDTO) {
    const { limit = 10, offset = 0 } = pagDTO;

    return this.productRepository.find({
      take: limit,
      skip: offset,

      // TODO: relaciones
    });
  }

  async findOne(term: string) {
    let product: Product;

    if (isValidObjectId(term)) {
      product = await this.productRepository.findOneBy({
        _id: StringToObjectID(term),
      });
    }

    /* MONGODB not support query builder */
    // else {
    //   const queryBuilder = this.productRepository.createQueryBuilder();
    //   product = await queryBuilder
    //     .where('title =:title or slug =:slug', {
    //       title: term,
    //       slug: term,
    //     })
    //     .getOne();
    // }

    if (!product && !isValidObjectId(term)) {
      product = await this.productRepository.findOne({
        where: { slug: term as string },
      });
    }

    if (!product)
      throw new NotFoundException(`El producto con id ${term} no se encuentra`);

    return product;
  }

  update(id: string, dto: UpdateProductDto) {
    return `This action updates a #${id} product ${dto}`;
  }

  async remove(id: string) {
    /* my option */
    // const {
    //   raw: { deletedCount },
    // } = await this.productRepository.delete({
    //   _id: StringToObjectID(id),
    // });
    // if (deletedCount === 0)
    //   throw new NotFoundException(`El producto con id ${id} no existe`);
    // return 'Producto eliminado';
    /* ======== */
    /* course option */
    const product = await this.findOne(id);
    await this.productRepository.remove(product);
  }

  private handleExceptions(error: any) {
    console.log(error.code);
    if (error.code === 11000)
      throw new BadRequestException(`La llave title ya existe`);

    this.logger.error(error);
    throw new InternalServerErrorException('Help!');
  }
}
