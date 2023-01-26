import Square from "./Square";
import "./styles.css";

export default function Board({ questionCells, actualCells, setActualCells }) {
  function handleClick(row, col) {
    let oldCellValue = actualCells.getCellValue(row, col);
    let newCellValue = " ";
    if (oldCellValue === " ") {
      newCellValue = questionCells.getCellValue(row, col);
    }

    actualCells = actualCells.clone();
    actualCells.setCellValue(row, col, newCellValue);
    setActualCells(actualCells);
  }

  let questionCells2D = questionCells.toTwoDimensional();

  return (
    <>
      {questionCells2D.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((_, colIndex) => (
            <Square
              key={rowIndex * questionCells.numCols + colIndex}
              questionValue={questionCells.getCellValue(rowIndex, colIndex)}
              actualValue={actualCells.getCellValue(rowIndex, colIndex)}
              onSquareClick={() => handleClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </>
  );
}
