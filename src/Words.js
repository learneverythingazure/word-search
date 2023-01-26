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

function canFill(cells, word, isVertical, row, col) {
  if (isVertical && cells.numRows - row >= word.length) {
    for (let i = 0; i < word.length; i++) {
      let cellValue = cells.getCellValue(row + i, col);
      if (cellValue !== " " && cellValue !== word[i]) {
        return false;
      }
    }
    return true;
  }

  if (!isVertical && cells.numCols - col >= word.length) {
    for (let i = 0; i < word.length; i++) {
      let cellValue = cells.getCellValue(row, col + i);
      if (cellValue !== " " && cellValue !== word[i]) {
        return false;
      }
    }
    return true;
  }

  return false;
}

function fillWord(cells, word, isVertical, row, col) {
  if (isVertical) {
    [...word].map((c, i) => cells.setCellValue(row + i, col, c));
  } else {
    [...word].map((c, i) => cells.setCellValue(row, col + i, c));
  }
}

function placeWord(questionCells, expectedCells, word, numRetries = 3) {
  while (numRetries > 0) {
    let isVertical = getRandomDirection();
    let [row, col] = getRandomCoordinate(
      questionCells.numRows,
      questionCells.numCols
    );
    if (canFill(questionCells, word, isVertical, row, col)) {
      fillWord(questionCells, word, isVertical, row, col);
      fillWord(expectedCells, word, isVertical, row, col);
      return true;
    }
    numRetries -= 1;
  }

  return false;
}

export { getWords, placeWord };
