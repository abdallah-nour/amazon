import React from 'react'
import * as S from './style'
export default function TxtField(props) {
  return (
    <S.Container>
      <S.InputLabel htmlFor={props.name} >{props.labelTxt}</S.InputLabel>
      <S.InputField id={props.name} type={props.inputType} placeholder={props.inputTxt}/>
    </S.Container>
  )
}
