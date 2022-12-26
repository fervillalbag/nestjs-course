import { Model } from 'mongoose';
import axios, { AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { PokeResponse } from './interfaces/poke-response.interface';
import { Pokemon } from '../pokemon/entities/pokemon.entity';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name) private readonly pokemonModel: Model<Pokemon>,
  ) {}
  private readonly axios: AxiosInstance = axios;

  async exectuteSeed() {
    await this.pokemonModel.deleteMany();

    const { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=5',
    );

    const pokemonToInsert: { name: string; no: number }[] = [];

    data.results.forEach((pokemon) => {
      const segments = pokemon.url.split('/');
      const no = +segments[segments.length - 2];

      pokemonToInsert.push({
        name: pokemon.name,
        no,
      });
    });

    await this.pokemonModel.insertMany(pokemonToInsert);

    return {
      message: 'Pokemon added on database',
    };
  }
}
