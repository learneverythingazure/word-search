function getRandomLetter() {
  const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let i = Math.floor(Math.random() * upperLetters.length);
  return upperLetters.charAt(i);
}

export default class Cells {
  constructor(numRows, numCols, cells = []) {
    this.numRows = numRows;
    this.numCols = numCols;
    this.cells = cells;
    if (this.cells.length === 0) {
      this.cells = Array(numRows * numCols).fill(" ");
    }
  }

  getCellValue(row, col) {
    return this.cells[row * this.numCols + col];
  }

  setCellValue(row, col, value) {
    this.cells[row * this.numCols + col] = value;
  }

  clone() {
    return new Cells(this.numRows, this.numCols, [...this.cells]);
  }

  fillEmptyCells() {
    for (let row = 0; row < this.numRows; row++) {
      for (let col = 0; col < this.numCols; col++) {
        if (this.getCellValue(row, col) === " ") {
          this.setCellValue(row, col, getRandomLetter());
        }
      }
    }
  }

  toTwoDimensional() {
    const result = Array(this.numRows)
      .fill(" ")
      .map(() => new Array(this.numCols).fill(" "));
    for (let row = 0; row < this.numRows; row++) {
      for (let col = 0; col < this.numCols; col++) {
        result[row][col] = this.getCellValue(row, col);
      }
    }
    return result;
  }
}
