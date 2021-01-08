import styled, { keyframes } from "styled-components";

import { FaRegQuestionCircle } from "react-icons/fa";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #95c2de;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;
`;

export const Content = styled.div`
  font-size: 1.6em;
  max-width: 500px;
  position: relative;
  text-align: center;
`;

export const NumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;
  & *:not(:last-child) {
    margin-right: 20px;
  }
`;

export const Nmb = styled.span`
  color: white;
  font-size: 7em;
`;

const spin = keyframes`
  100% { 
  -webkit-transform: rotate(360deg); 
  transform:rotate(360deg); 
  }
`;

export const QuestionIcon = styled(FaRegQuestionCircle)`
  font-size: 8.5rem;
  animation: ${spin} 2.7s linear infinite;
  & * {
    color: white;
  }
`;
