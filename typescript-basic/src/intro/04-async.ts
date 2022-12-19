import axios from "axios";
import {
  PokeAPIResponse,
  Move,
} from "../interfaces/poikeapi-response-interfaces";

export class Pokemon {
  get imageURL(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!`);
  }

  speak() {
    console.log(`${this.name} ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    const URL_ENDPOINT = "https://pokeapi.co/api/v2/pokemon/4";
    const { data } = await axios.get<PokeAPIResponse>(URL_ENDPOINT);
    return data.moves;
  }
}

export const charmander = new Pokemon(1, "Bulbasur");
/* No permite reescribir cuando utilizamos READONLY */
// charmander.id = 10;
// charmander.scream();
// charmander.speak();
(async () => {
  const charmander_moves = await charmander.getMoves();
  console.log(charmander_moves);
})();

// console.log(charmander.getMoves());
