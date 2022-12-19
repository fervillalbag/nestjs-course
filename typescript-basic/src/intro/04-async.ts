import axios from "axios";

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

  async getMoves() {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/4"
    );
    return response.data.moves;
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
