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

function generate_empty_cells(numRows, numCols) {
  return Array(numRows)
    .fill(" ")
    .map(() => new Array(numCols).fill(" "));
}

function get_words() {
  return ["ALPHA", "BRAVO", "CHARLIE", "DELTA", "ECHO", "FOXTROT"];
}

function random_direction() {
  return Math.random() < 0.5;
}

function random_coordinate(numRows, numCols) {
  const row = Math.floor(Math.random() * numRows);
  const col = Math.floor(Math.random() * numCols);
  return [row, col];
}

function place_word(numRows, numCols, cells, word) {
  const isVertical = random_direction();
  const [row, col] = random_coordinate(numRows, numCols);

  if (isVertical && numRows - row >= word.length) {
    for (let i = 0; i < word.length; i++) {
      if (cells[row + i][col] !== " " && cells[row + i][col] !== word[i]) {
        return false;
      }
    }
    [...word].map((c, i) => (cells[row + i][col] = c));
    return true;
  }

  if (!isVertical && numCols - col >= word.length) {
    for (let i = 0; i < word.length; i++) {
      if (cells[row][col + i] !== " " && cells[row][col + i] !== word[i]) {
        return false;
      }
    }
    [...word].map((c, i) => (cells[row][col + i] = c));
    return true;
  }

  return false;
}

function random_letter() {
  const upper_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let i = Math.floor(Math.random() * upper_letters.length);
  return upper_letters.charAt(i);
}

function fill_empty_cells(numRows, numCols, cells) {
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (cells[row][col] === " ") {
        cells[row][col] = random_letter();
      }
    }
  }

  return cells;
}

export default function Game() {
  const [numRows, numCols] = [12, 12];
  const cells = generate_empty_cells(numRows, numCols);

  const words = get_words();
  const placed_words = words.filter((word) =>
    place_word(numRows, numCols, cells, word)
  );

  fill_empty_cells(numRows, numCols, cells);

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
