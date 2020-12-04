import React from 'react'
import * as S from './style'

export default function TxtField({ marBottom, name, value, onChange, ...props }) {
  return (
    <S.Container marBottom={marBottom}>
      <S.Header>
        <S.InputLabel htmlFor={name} >{props.labelTxt}</S.InputLabel>
        <S.RightSpan >{props.rightSpan}</S.RightSpan>
      </S.Header>
      <S.InputField id={name} name={name} type={props.type} value={value} onChange={onChange} placeholder={props.placeholder} />
      <S.BottomDiv >{props.bottomDiv}</S.BottomDiv>
    </S.Container>
  )
}
