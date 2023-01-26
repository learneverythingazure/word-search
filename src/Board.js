import Square from "./Square";
import "./styles.css";

export default function Board({ cells }) {
  return (
    <>
      {cells.toTwoDimensional().map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((_, colIndex) => (
            <Square
              key={rowIndex * cells.numCols + colIndex}
              value={cells.getCellValue(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </>
  );
}
