import axios from "axios";
import React, { useState, useEffect } from "react";
import QuestionCard from "./components/QuestionCard";
import {
  fetchQuestions,
  Difficulty,
  QuestionSatate,
  AnswerObject,
} from "./API";

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionSatate[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);

  const startTraivia = async () => {
    try {
      setLoading(true);
      setGameOver(false);

      const newQuestions = await fetchQuestions(
        TOTAL_QUESTIONS,
        Difficulty.EASY
      );
      //* Set Question
      setQuestions(newQuestions);

      //*Reset States
      setScore(0);
      setUserAnswer([]);
      setNumber(0);
      setLoading(false);
    } catch (error) {
      //* Error handeling
      console.log(error);
    }
  };

  const cheeckAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  // useEffect(() =>{
  // },[])

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {gameOver || userAnswer.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startTraivia}>
          start
        </button>
      ) : null}

      {!gameOver ? (<p className="score">Score: {score} </p>) : null}
      {loading ? <h1>Loading...</h1> : null}
      {!loading && !gameOver ? (
        <QuestionCard
          questionNumber={number + 1}
          totlaQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswer ? userAnswer[number] : undefined}
          callback={cheeckAnswer}
        />
      ) : null}

      <button className="next" onClick={nextQuestion}>
        Next Questions
      </button>
    </div>
  );
}

export default App;
