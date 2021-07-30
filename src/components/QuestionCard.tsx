import React from "react";
//? Types
import { AnswerObject} from "../API";

import {CheechQuestionButton} from './components.style'

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totlaQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  answers,
  callback,
  question,
  questionNumber,
  totlaQuestions,
  userAnswer,
}) => {
  return (
    <div>
      <p className="question-number">
        Question: {questionNumber} / {totlaQuestions}
      </p>
      <p className="question" dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <CheechQuestionButton 
            correct={userAnswer?.correctAnswer === answer}
            userClick={userAnswer?.answer === answer}
          key={answer}>
            <button
              className={"question-button"}
              
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }}   />
            </button>
          </CheechQuestionButton>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
