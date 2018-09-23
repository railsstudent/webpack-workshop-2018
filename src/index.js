import nav from "./nav";
import { top, bottom } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";

const button = makeButton("Yay! A first button");
const button2 = makeButton("Yay! A second button");

document.body.appendChild(button);
document.body.appendChild(button2);

console.log(nav(), top, bottom, makeColorStyle("cyan"));
