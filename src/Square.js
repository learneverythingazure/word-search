import "./styles.css";

export default function Square({ questionValue, actualValue, onSquareClick }) {
  return (
    <button
      className={`square ${actualValue !== " " ? "selected" : "not-selected"}`}
      onClick={onSquareClick}
    >
      {questionValue}
    </button>
  );
}
