function isWon(actualCells, expectedCells) {
  for (let row = 0; row < actualCells.numRows; row++) {
    for (let col = 0; col < actualCells.numCols; col++) {
      let actualCellValue = actualCells.getCellValue(row, col);
      let expectedCellValue = expectedCells.getCellValue(row, col);
      if (actualCellValue != expectedCellValue) {
        return false;
      }
    }
  }
  return true;
}

export { isWon };
