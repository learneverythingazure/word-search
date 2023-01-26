import Square from "./Square";
import "./styles.css";

export default function Board({ cells }) {
  return (
    <>
      {cells.map((rowCells) => (
        <div className="board-row">
          {rowCells.map((rowColCell) => (
            <Square value={rowColCell} />
          ))}
        </div>
      ))}
    </>
  );
}
