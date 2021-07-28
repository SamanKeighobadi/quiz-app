import axios from "axios";
import React, { useState, useEffect } from "react";
import QuestionCard from "./components/QuestionCard";
import { fetchQuestions, Difficulty,QuestionSatate } from "./API";

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionSatate[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  const startTraivia = async () => {};

  const cheeckAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  // useEffect(() =>{
  // },[])

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <button className="start" onClick={startTraivia}>
        start
      </button>
      <p className="score">Score: </p>
      {/* <QuestionCard 
        questionNumber={number + 1}
        totlaQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswer ? userAnswer[number] : undefined}
        callback={cheeckAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Questions
      </button>
    </div>
  );
}

export default App;
