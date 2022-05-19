import p5 from "p5";

const SIZE = 80;

export default class Scenario {
  private matrix: Array<Array<number>> = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
  ];

  show(p: p5) {
    p.fill(255, 0, 0);
    this.matrix.forEach((arrow, a) => {
      arrow.forEach((cell, c) => {
        if (cell === 0) p.fill(0);
        if (cell === 1) p.fill(255);
        p.rect(c * SIZE, a * SIZE, SIZE, SIZE);
      });
    });
  }
}
