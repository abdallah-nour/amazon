import React from 'react'
import * as S from './style'

export default function Section2() {
  return (
    <S.Container>
      <S.Table>
        <S.Row>
          {/* <S.Cell> */}
            <S.Cell>
              <S.CellHeader>Amazon Music</S.CellHeader>
              <S.CellBody>Stream millions <br /> of songs</S.CellBody>
            </S.Cell>
          {/* </S.Cell> */}
        </S.Row>
      </S.Table>
    </S.Container>
  )
}
