import React from 'react'
import * as S from './style'
import rows from './rows';
import { LinkFooter } from '../style';

export default function Section2() {
  return (
    <S.Container>
      <S.Table>
        <tbody>
          {rows.map((row, i) => {
            return <S.Row key={i}>
              {<S.Space />}
              {row.map((arr, index) => {
                return <S.Cell key={index}>
                  <S.CellHeader>{arr[0]}</S.CellHeader>
                  <S.CellBody>{arr[1]}</S.CellBody>
                </S.Cell>
              })}
            </S.Row>
          })}
        </tbody>
      </S.Table>
      <S.CopyAndRights>
        <LinkFooter underlinecolor='white'>Conditions of Use</LinkFooter>
        <LinkFooter underlinecolor='white'>Privacy Notice</LinkFooter>
        <LinkFooter underlinecolor='white'>Interest-Based Ads</LinkFooter>
        <S.CopyARTxt>© 1996-2020, Amazon.com, Inc. or its affiliates</S.CopyARTxt>
      </S.CopyAndRights>
    </S.Container>
  )
}
