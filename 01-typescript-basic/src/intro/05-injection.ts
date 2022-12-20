import {
  HttpAdapter,
  PokeApiAdapter,
  PokeApiFetcheAdapter,
} from "../api/pokeApi.adapter";
import {
  Move,
  PokeAPIResponse,
} from "../interfaces/poikeapi-response-interfaces";

export class Pokemon {
  get imageURL(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string,
    // inyectar dependencias
    private readonly http: HttpAdapter
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!`);
  }

  speak() {
    console.log(`${this.name} ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    const URL = "https://pokeapi.co/api/v2/pokemon/4";
    const data = await this.http.get<PokeAPIResponse>(URL);
    // console.log({ name: data.moves[0].move.name });
    return data.moves;
  }
}

const pokeApiFetch = new PokeApiFetcheAdapter();
const pokeApiAxios = new PokeApiAdapter();

export const bulbasur = new Pokemon(1, "Bulbasur", pokeApiFetch);
export const charmander = new Pokemon(3, "Charmander", pokeApiAxios);

(async () => {
  const response_fetch = await bulbasur.getMoves();
  console.log("fetch", response_fetch);

  const response_axios = await charmander.getMoves();
  console.log("axios", response_axios);
})();
