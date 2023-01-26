import { useState } from "react";
import "./styles.css";

function Square({ value }) {
  return <button className="square">{value}</button>;
}

function Board({ cells }) {
  return (
    <>
      {cells.map((row_cells) => (
        <div className="board-row">
          {row_cells.map((row_col_cell) => (
            <Square value={row_col_cell} />
          ))}
        </div>
      ))}
    </>
  );
}

export default function App() {
  const [cells] = useState(
    Array(9)
      .fill("A")
      .map(() => Array(9).fill("A"))
  );
  return <Board cells={cells} />;
}
