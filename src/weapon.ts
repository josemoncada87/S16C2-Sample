import p5 from 'p5';
import Bullet from './bullet';
import { PlayerDirection } from './types';

export default class Weapon {
  private x!:number;
  private y!:number;
  private direction!:PlayerDirection;
  private angle:number = 0;
  private ammunition:Bullet[] = [];

  constructor(x:number, y:number) {
    this.x = x;
    this.y = y;
    this.direction = 'UP';
    this.reloadBullets();
  }

  reloadBullets() {
    for (let index = 0; index < 10; index += 1) {
      this.ammunition.push(new Bullet());
    }
  }

  show(p:p5) {
    p.fill(0);
    p.circle(this.x, this.y, 20);
    p.push();
    p.rectMode(p.CENTER);
    p.translate(this.x, this.y);
    p.rotate(this.angle);
    p.rect(0, 0, 10, 30);
    p.rectMode(p.CORNER);
    p.pop();
  }

  shoot() {
    const bullet = this.ammunition.pop();
    if (bullet !== undefined) {
      bullet.shoot(this.x, this.y, this.direction);
    }
    return bullet;
  }

  setOrientation() {
    switch (this.direction) {
      case 'LEFT':
        this.angle = Math.PI * 1.5;
        break;
      case 'RIGHT':
        this.angle = Math.PI / 2;
        break;
      case 'UP':
        this.angle = Math.PI;
        break;
      case 'DOWN':
        this.angle = 0;
        break;
      default:
        break;
    }
  }

  updatePositionInPixels(newX:number, newY:number) {
    this.x = newX;
    this.y = newY;
  }

  setDirection(direction : PlayerDirection) {
    this.direction = direction;
    this.setOrientation();
  }
}
