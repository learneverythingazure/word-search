import { useState } from "react";

import { getWords, placeWord } from "./Words";
import { generateEmptyCells, fillEmptyCells } from "./Cells";
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

export default function Game() {
  const [numRows, numCols] = [12, 12];
  const cells = generateEmptyCells(numRows, numCols);

  const words = getWords();
  const placed_words = words.filter((word) =>
    placeWord(numRows, numCols, cells, word)
  );

  fillEmptyCells(numRows, numCols, cells);

  return (
    <div className="game">
      <div className="game-board">
        <Board cells={cells} />
      </div>
      <div className="game-info">
        <ol>
          {placed_words.map((word) => (
            <li key={word}>{word}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
