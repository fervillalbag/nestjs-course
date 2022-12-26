import axios, { AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';

import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  async exectuteSeed() {
    const { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );
    data.results.forEach((pokemon) => {
      const segments = pokemon.url.split('/');
      // eslint-disable-next-line
      const no = +segments[segments.length - 2];

      return {};
    });
    return data.results;
  }
}
