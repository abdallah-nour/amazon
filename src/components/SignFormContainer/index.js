//Q in amazon sign up the input value attrs change every second???
import React from 'react'
import * as S from './style'

export default function SignFormContainer(props) {
  return (
    <S.Container>
      <S.HeaderTxt>{props.headerTxt}</S.HeaderTxt>
      {props.children}
    </S.Container>
  )
}
