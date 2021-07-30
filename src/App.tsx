import React, { useState } from "react";
//? Import Components
import QuestionCard from "./components/QuestionCard";
import Loading from "./components/Loading";
//? Import Types
import {
  fetchQuestions,
  Difficulty,
  QuestionSatate,
  AnswerObject,
} from "./API";

const TOTAL_QUESTIONS = 10;

function App() {
  //?States
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionSatate[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // console.log(questions);

  //? Get Questions from Traivia
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

  //? Cheeck Answer
  const cheeckAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //*users answer
      const answer = e.currentTarget.value;

      const correct = questions[number].correct_answer === answer;

      if (correct) setScore((prevState) => prevState + 1);

      if (correct) {
        console.log("correct answer");
      } else {
        console.log("incorrect answer");
      }
      //* Save answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswer((prevUserAnswer) => [...prevUserAnswer, answerObject]);
    }
  };

  //? Next Question
  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {gameOver || userAnswer.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startTraivia}>
          start
        </button>
      ) : null}

      {!gameOver ? <p className="score">Score: {score} </p> : null}
      {loading ? <Loading /> : null}
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

      {!gameOver &&
      !loading &&
      userAnswer.length === number + 1 &&
      number !== TOTAL_QUESTIONS - 1 ? (
        <button className="next-question" onClick={nextQuestion}>
          Next Questions
        </button>
      ) : null}
    </div>
  );
}

export default App;
