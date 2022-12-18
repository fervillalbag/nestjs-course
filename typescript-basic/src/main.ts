import "./style.css";
import { name, age, templateString } from "./intro/01-types";
import { pokemons } from "./intro/02-objects";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <p>Hello world from ${name} with ${age} years old :D</p>
    <p>${pokemons}</p>
  </div>
`;
console.log(templateString);
