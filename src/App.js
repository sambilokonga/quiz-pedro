import "./App.css";
import React, { useState, useContext } from "react";
import HomeMenu from "./Components/HomeMenu";
import Exam from "./Components/Exam";
import FinishExam from "./Components/FinishExam";
import { QuizContext } from "./Tools/Contexts";

function App() {
  const [gameState, setGameState] = useState("menu");

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{ gameState, setGameState }}>
        {gameState === "menu" && <HomeMenu />}
        {gameState === "exam" && <Exam />}
        {gameState === "finishExam" && <FinishExam />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
