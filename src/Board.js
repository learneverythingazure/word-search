import Square from "./Square";
import { isWon } from "./Win";
import "./styles.css";

export default function Board({
  questionCells,
  actualCells,
  setActualCells,
  expectedCells,
  status,
  setStatus,
}) {
  function handleClick(row, col) {
    let oldCellValue = actualCells.getCellValue(row, col);
    let newCellValue = " ";
    if (oldCellValue === " ") {
      newCellValue = questionCells.getCellValue(row, col);
    }

    actualCells = actualCells.clone();
    actualCells.setCellValue(row, col, newCellValue);
    setActualCells(actualCells);

    setStatus(isWon(actualCells, expectedCells) ? "Finished!" : "");
  }

  let questionCells2D = questionCells.toTwoDimensional();

  return (
    <>
      <div className="status">{status}</div>
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
