import React from "react";

type Props = {
  question: string;
  answer: string[];
  callback: any[];
  userAnswer: string;
  questionNumber: string;
  totlaQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  answer,
  callback,
  question,
  questionNumber,
  totlaQuestions,
  userAnswer,
  children,
}) => {
  return (
      <div>
          <p className="number">
              Question: {questionNumber} / {totlaQuestions}
          </p>
          <p dangerouslySetInnerHTML={{__html: question}} 
      </div>
  );
};

export default QuestionCard;
