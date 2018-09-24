import nav from "./nav";
import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";

import makeImage from "./image";
import imageUrl from "./webpack-logo.jpg";

import "./footer.css";
import "./button.css";

import "./foo.ts";

const button = makeButton("Yay! A first button");
button.style = makeColorStyle("cyan");

const image = makeImage(imageUrl, { width: 150, height: 150 });

document.body.appendChild(button);
document.body.appendChild(image);
document.body.appendChild(footer);
