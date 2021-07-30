import styled, { createGlobalStyle } from "styled-components";
//@ts-ignore

type CheechUserAnswer = {
  correct: boolean;
  userClick: boolean;
};

export const CheechQuestionButton = styled.div<CheechUserAnswer>`
  button {
    background: ${({ correct, userClick }) =>
      correct ? "green" : !correct && userClick ? "red" : null};
  }
`;
