import { sign } from 'crypto';
import p5 from 'p5';
import Scenario from './scenario';

const SIZE = 80;
export default class Player {
  private x: number = 0;
  private y: number = 0;
  private row: number = 0;
  private col: number = 0;
  private isProtected: boolean = false;
  private isShieldEnable: boolean = true;
  private refScenario: Scenario | null = null;

  constructor(row: number, col: number) {
    this.row = row;
    this.col = col;
    this.updatePositionInPixels();
  }

  updatePositionInPixels() {
    this.x = (this.col * SIZE) + SIZE / 2;
    this.y = (this.row * SIZE) + SIZE / 2;
  }

  showShield(p: p5) {
    p.fill(0, 0, 255, 20);
    p.circle(this.x, this.y, 100);
  }

  show(p: p5) {
    p.fill(255, 0, 0);
    p.circle(this.x, this.y, 50);
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
        if (this.refScenario?.isFreeSpace(this.row, this.col + 1)) {
          this.col += 1;
        }
        break;
      case 1: // izq
        if (this.refScenario?.isFreeSpace(this.row, this.col - 1)) {
          this.col -= 1;
        }
        break;
      case 2: // arr
        if (this.refScenario?.isFreeSpace(this.row - 1, this.col)) {
          this.row -= 1;
        }
        break;
      case 3: // aba
        if (this.refScenario?.isFreeSpace(this.row + 1, this.col)) {
          this.row += 1;
        }
        break;
      default:
        break;
    }
    this.updatePositionInPixels();
  }

  getX() {
    return this.x;
  }

  setScenario(scenario: Scenario) {
    this.refScenario = scenario;
  }
}
