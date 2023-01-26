import { useState } from "react";

import { getWords, placeWord } from "./Words";
import Cells from "./Cells";
import Board from "./Board";
import "./styles.css";

export default function Game() {
  const [numRows, numCols] = [12, 12];
  const [cells] = useState(new Cells(numRows, numCols));

  const words = getWords();
  const placed_words = words.filter((word) => placeWord(cells, word));

  cells.fillEmptyCells(numRows, numCols);

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
