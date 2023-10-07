import React, { useContext } from "react";
import { QuizContext } from "../Tools/Contexts";
import "../App.css";

export default function HomeMenu() {
  const { gameState, setGameState } = useContext(QuizContext);

  return (
    <div className="Menu">
      <button
        onClick={() => {
          setGameState("exam");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}
