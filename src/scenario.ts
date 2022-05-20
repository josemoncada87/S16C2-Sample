import p5 from 'p5';

const SIZE = 80;

export default class Scenario {
  private matrix: Array<Array<number>> = [
    [1, 1, 0, 0, 1],
    [0, 0, 1, 0, 1],
    [0, 0, 1, 0, 1],
    [0, 0, 1, 0, 1],
    [0, 0, 1, 0, 1],
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

  isFreeSpace(row:number, col:number):boolean {
    if (this.isValidBlockPosition(row, col) === false) {
      return false;
    }
    let result = false;
    switch (this.matrix[row][col]) {
      case 0:
        result = false;
        break;
      case 1:
        result = true;
        break;
      default:
        break;
    }
    return result;
  }

  verifyCollision(x:number, y:number) {
    const row = Math.floor(y / 80);
    const col = Math.floor(x / 80);
    const result = !this.isFreeSpace(row, col);
    return {
      result,
      row,
      col,
    };
  }

  destroyBlock(row:number, col:number) {
    if (this.isValidBlockPosition(row, col)) {
      this.matrix[row][col] = 1;
    }
  }

  isValidBlockPosition(row:number, col:number):boolean {
    return !(row >= this.matrix.length || row < 0
      || col >= this.matrix[row].length || col < 0);
  }
}
