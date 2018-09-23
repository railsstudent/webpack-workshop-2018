import { red, blue, makeColorStyle } from "./button-styles";

const top = document.createElement("div");
top.innerText = "Top of Footer";
top.style = red;

const bottom = document.createElement("div");
bottom.innerText = "Bottom of Footer";
bottom.style = blue;

const third = document.createElement("div");
third.innerText = "Third Footer";
third.style = makeColorStyle("goldenrod");

const footer = document.createElement("footer");
footer.appendChild(top);
footer.appendChild(bottom);
footer.appendChild(third);

export { top, bottom, footer };
