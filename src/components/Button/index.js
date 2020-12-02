import React from 'react'
// import * as S from './style'
import styled from 'styled-components';


const Btn = styled.button`${props =>
color: black;
width: 100%;
height: 29px;
}
  /* background: ${props => props.bcColor};
  border-color: ${props=> props.borderColor};
  border-radius: 2px;
  & :focus{
    outline: 1px;
    outline-color: #e77600;
    box-shadow: 0 0 3px 2px rgba(228,121,17,.5);
  } */
  /* max-wihdt: */
`;

export default function Button(props) {
  return (
    <Btn {...props}>
      {props.children}
    </Btn>
  )
}
