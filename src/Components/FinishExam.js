import React, { useContext } from "react";
import { Questions } from "../Tools/QuestionsList";
import { QuizContext } from "../Tools/Contexts";

function FinishExam() {
  const { score, setGameState, setScore } = useContext(QuizContext);

  const restartExam = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="EndScreen">
      <h1>FinishExam</h1>
      <h3>
        {score} / {Questions.length}
      </h3>
      <button onClick={restartExam}>Restart exam</button>
    </div>
  );
}

export default FinishExam;
