export const pokemonIds: number[] = [1, 20, 30, 66];
// pokemonIds.push(+"1");
// console.log(pokemonIds);

interface Pokemon {
  id: string;
  name: string;
  age?: number;
}

export const bulbasur: Pokemon = {
  id: "1",
  name: "Bulbasur",
  age: 32,
};

export const charmander: Pokemon = {
  id: "2",
  name: "Charmander",
  age: 20,
};

export const pokemons: Pokemon[] = [];
pokemons.push(bulbasur, charmander);

console.log(pokemons);
