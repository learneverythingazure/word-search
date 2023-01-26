function generateEmptyCells(numRows, numCols) {
  return Array(numRows)
    .fill(" ")
    .map(() => new Array(numCols).fill(" "));
}

function getRandomLetter() {
  const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let i = Math.floor(Math.random() * upperLetters.length);
  return upperLetters.charAt(i);
}

function fillEmptyCells(numRows, numCols, cells) {
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (cells[row][col] === " ") {
        cells[row][col] = getRandomLetter();
      }
    }
  }
}

export { generateEmptyCells, fillEmptyCells };
