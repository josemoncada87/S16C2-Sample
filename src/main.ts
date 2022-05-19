/* eslint-disable no-param-reassign */
import "./style.css";
import p5, { Image } from "p5";
import Player from "./player";
import Scenario from "./scenerio";

const player = new Player(2, 5);
const scenario = new Scenario();
let img: Image;

const sketch = (p: p5) => {
  p.preload = () => {
    img = p.loadImage("../assets/imgimg.png");
  };

  p.setup = () => {
    p.createCanvas(500, 500);
  };

  p.draw = () => {
    p.background(80);
    p.image(img, 0, 0, 500, 500);
    scenario.show(p);
    player.show(p);
  };

  p.keyPressed = () => {
    if (p.key.toLocaleLowerCase() === "q") {
      if (player.activateProtection()) {
        console.log("I am hulk!!");
      } else {
        console.log(" F ");
      }
    }

    if (p.key.toLocaleLowerCase() === "d") {
      player.move(0);
    }
  };
};
// eslint-disable-next-line new-cap
export default new p5(sketch);
