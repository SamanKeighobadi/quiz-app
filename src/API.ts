import axios from "axios";

//? Random Function
const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);

//?Types
export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionSatate = Question & { answers: string[] };

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

//? Difficulty Enum
export enum Difficulty {
  EASY = "easy",
  HARD = "hard",
  MEDIUM = "medium",
}

//? Fetch API
export const fetchQuestions = async (
  amount: number,
  difficulty: Difficulty
): Promise<QuestionSatate[]> => {
  const QUIZ_API = `https://opentdb.com/api.php?amount=${amount}&difficaulty=${difficulty}&type=multiple`;
  const data = await (await axios(QUIZ_API)).data;
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
