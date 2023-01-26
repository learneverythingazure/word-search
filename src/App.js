import { useState } from "react";
import "./styles.css";

function Square({ value }) {
  return <button className="square">{value}</button>;
}

function Board({ cells }) {
  return (
    <>
      {cells.map((item) => (
        <Square value={item} />
      ))}
    </>
  );
}

export default function App() {
  const [cells] = useState([Array(9).fill("B")]);
  return <Board cells={cells} />;
}
