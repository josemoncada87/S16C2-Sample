/* eslint-disable no-param-reassign */
import './style.css';
import p5 from 'p5';
import Player from './player';
import Scenario from './scenario';
import Bullet from './bullet';

const scenario = new Scenario();
const player = new Player(0, 0);
const bullets:Bullet[] = [];
// let img: Image;

const sketch = (p: p5) => {
  p.preload = () => {
    // img = p.loadImage('../assests/imgimg.png');
  };

  p.setup = () => {
    p.createCanvas(500, 500);
    player.setScenario(scenario);
  };

  p.draw = () => {
    p.background(80);

    scenario.show(p);
    player.show(p);
    bullets.forEach((bullet:Bullet) => {
      bullet.show(p);
    });
  };

  p.keyPressed = () => {
    const k = p.key.toLocaleLowerCase();

    if (k === 'q') {
      if (player.activateProtection()) {
        // console.log('I am hulk!!');
      } else {
        // console.log(' F ');
      }
    }

    if (k === 'd') {
      player.move(0);
    }

    if (k === 'a') {
      player.move(1);
    }

    if (k === 'w') {
      player.move(2);
    }

    if (k === 's') {
      player.move(3);
    }

    if (k === 'p') {
      const newBullet = player.shootWeapon();
      if (newBullet !== undefined) {
        bullets.push(newBullet);
      } else {
        console.log('No bullets!! Run!! ');
      }
    }
  };
};
// eslint-disable-next-line new-cap
export default new p5(sketch);
