import p5 from "p5";

const SIZE = 80;
export default class Player {
  private x: number = 0;
  private y: number = 0;
  private isProtected: boolean = false;
  private isShieldEnable: boolean = true;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  showShield(p: p5) {
    p.fill(0, 0, 255, 20);
    p.circle(this.x, this.y, 100);
  }

  show(p: p5) {
    p.fill(255, 0, 0);
    p.circle(this.x * SIZE - 40, this.y * SIZE - 40, 50);
    if (this.isProtected) {
      this.showShield(p);
    }
  }

  activateProtection() {
    let result = false;
    if (this.isShieldEnable) {
      this.isProtected = true;
      this.isShieldEnable = false;
      this.deactivateAsync();
      result = true;
    }
    return result;
  }

  deactivateAsync() {
    setTimeout(() => {
      this.deactivateProtection();
      this.enableShield();
    }, 2000);
  }

  enableShield() {
    setTimeout(() => {
      this.isShieldEnable = true;
    }, 4000);
  }

  deactivateProtection() {
    this.isProtected = false;
  }

  move(dir: number) {
    switch (dir) {
      case 0: // der
        this.x += 1;
        break;
      case 1: // izq
        this.x -= 1;
        break;
      default:
        break;
    }
  }

  getX() {
    return this.x;
  }
}
