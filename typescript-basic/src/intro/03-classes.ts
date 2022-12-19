export class Pokemon {
  // public id: number;
  // public name: string;

  // constructor(id: number, name: string) {
  //   this.id = id;
  //   this.name = name;
  //   console.log("constructor llamado");
  // }

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
}

export const charmander = new Pokemon(1, "Bulbasur");
/* No permite reescribir cuando utilizamos READONLY */
// charmander.id = 10;
charmander.scream();
charmander.speak();
