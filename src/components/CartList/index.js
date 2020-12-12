import { useState } from 'react'
import * as Txt from '../Txt';
import * as S from './style';
import CartSubtotal from '../CartSubtotal';

export default function CartList({ children }) {
  return (
    <S.Container>
      <S.Header>
        <Txt.H size='28px' margin='0'>Shopping Cart</Txt.H>
        <Txt.CustomLink  to='/cart' size='14px' color='#007185'>Deselect all items</Txt.CustomLink>
        <S.HeaderSmallTxt>Price</S.HeaderSmallTxt>
      </S.Header>
      <Txt.Divide margin='-22px 0 0'></Txt.Divide>
      {children}
      <S.SubtotalContainer>
        <S.SubtotalContent>
          <CartSubtotal ></CartSubtotal>
        </S.SubtotalContent>
      </S.SubtotalContainer>
    </S.Container>
  )
}
