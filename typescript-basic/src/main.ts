import "./style.css";
import { name, age } from "./intro/01-types";
import { charmander } from "./intro/03-classes";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <p>Hello world from ${name} with ${age} years old :D</p>
    <pre>${JSON.stringify(charmander)}</pre>
  </div>
`;

console.log(charmander);
