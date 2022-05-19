/* eslint-disable no-param-reassign */
import './style.css';
import p5 from 'p5';
import Player from './player';

const player = new Player(200, 200);

const sketch = (p:p5) => {
  p.setup = () => {
    p.createCanvas(500, 500);
  };

  p.draw = () => {
    p.background(80);
    player.show(p);
  };

  p.keyPressed = () => {
    if (p.key.toLocaleLowerCase() === 'q') {
      if (player.activateProtection()) {
        console.log('I am hulk!!');
      } else {
        console.log(' F ');
      }
    }
  };
};
// eslint-disable-next-line new-cap
export default new p5(sketch);
