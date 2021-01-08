import styled, { keyframes } from "styled-components";

import { FaRegQuestionCircle } from "react-icons/fa";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #c45500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  font-size: 1.6em;
  max-width: 500px;
  position: relative;
  text-align: center;
  & a:hover {
    text-decoration: underline;
  }
`;

export const NumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;
  & *:not(:last-child) {
    margin-right: 20px;
  }
  font-size: 7em;
  & * {
    color: rgb(20, 20, 20);
  }
`;

const spin = keyframes`
  100% {
    transform:rotate(360deg); 
  }
`;

export const QuestionIcon = styled(FaRegQuestionCircle)`
  font-size: 8.5rem;
  animation: ${spin} 2.7s linear infinite;
  & * {
    color: rgb(20, 20, 20);
  }
`;
