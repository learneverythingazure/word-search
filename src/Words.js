function getWords() {
  return ["ALPHA", "BRAVO", "CHARLIE", "DELTA", "ECHO", "FOXTROT"];
}

function getRandomDirection() {
  return Math.random() < 0.5;
}

function getRandomCoordinate(numRows, numCols) {
  const row = Math.floor(Math.random() * numRows);
  const col = Math.floor(Math.random() * numCols);
  return [row, col];
}

function canFill(numRows, numCols, cells, word, isVertical, row, col) {
  if (isVertical && numRows - row >= word.length) {
    for (let i = 0; i < word.length; i++) {
      if (cells[row + i][col] !== " " && cells[row + i][col] !== word[i]) {
        return false;
      }
    }
    return true;
  }

  if (isVertical && numCols - col >= word.length) {
    for (let i = 0; i < word.length; i++) {
      if (cells[row][col + i] !== " " && cells[row][col + i] !== word[i]) {
        return false;
      }
    }
    return true;
  }

  return false;
}

function fillWord(cells, word, isVertical, row, col) {
  if (isVertical) {
    [...word].map((c, i) => (cells[row + i][col] = c));
  } else {
    [...word].map((c, i) => (cells[row][col + i] = c));
  }
}

function placeWord(numRows, numCols, cells, word) {
  const isVertical = getRandomDirection();
  const [row, col] = getRandomCoordinate(numRows, numCols);

  if (canFill(numRows, numCols, cells, word, isVertical, row, col)) {
    fillWord(cells, word, isVertical, row, col);
    return true;
  }

  return false;
}

export { getWords, placeWord };
