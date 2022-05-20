import p5 from 'p5';
import { PlayerDirection } from './types';

export default class Bullet {
  private x!:number;
  private y!:number;
  private direction!:PlayerDirection;

  shoot(x:number, y:number, direction:PlayerDirection) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  move() {
    switch (this.direction) {
      case 'UP':
        this.y -= 1;
        break;
      case 'DOWN':
        this.y += 1;
        break;
      case 'LEFT':
        this.x -= 1;
        break;
      case 'RIGHT':
        this.x += 1;
        break;
      default:
        break;
    }
  }

  show(p:p5) {
    p.fill(0, 255, 0);
    p.circle(this.x, this.y, 10);
    this.move();
  }
}
