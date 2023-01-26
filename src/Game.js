import { useState } from "react";

import { getWords, placeWord } from "./Words";
import Cells from "./Cells";
import Board from "./Board";
import "./styles.css";

export default function Game() {
  const [numRows, numCols] = [12, 12];
  const [questionCells] = useState(new Cells(numRows, numCols));
  const [expectedCells] = useState(new Cells(numRows, numCols));
  const [actualCells, setActualCells] = useState(new Cells(numRows, numCols));
  const [status, setStatus] = useState("");

  const words = getWords();
  const [placedWords] = useState(
    words.filter((word) => placeWord(questionCells, expectedCells, word))
  );

  questionCells.fillEmptyCells(numRows, numCols);

  return (
    <div className="game">
      <div className="game-board">
        <Board
          questionCells={questionCells}
          actualCells={actualCells}
          setActualCells={setActualCells}
          expectedCells={expectedCells}
          status={status}
          setStatus={setStatus}
        />
      </div>
      <div className="game-info">
        <ol>
          {placedWords.map((word) => (
            <li key={word}>{word}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
