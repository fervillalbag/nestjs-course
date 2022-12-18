import "./style.css";
import { name, age, templateString } from "./intro/01-types";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <p>Hello world from ${name} with ${age} years old :D</p>
  </div>
`;
console.log(templateString);
