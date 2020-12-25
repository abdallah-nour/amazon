import * as S from './style';

import { useEffect, useState } from 'react';

import Button from '../../components/Button';
import CartItem from '../../components/CartItem';
import CartItemsList from '../../components/CartItemsList';
import CartSubtotal from '../../components/CartSubtotal';
import Header from '../../components/Header';
import { useStateValue } from '../../components/StateProvider';

export default function Cart({ setSideMenuVisibility }) {
  const [{ cart }] = useStateValue();
  return (
    <>
      <Header setSideMenuVisibility={setSideMenuVisibility} />
      <S.Container>
        <S.Left>
          <CartItemsList>
            {
              cart.map((item, index) => <CartItem key={item.id} index={index} descTxt={item.title} imgSrc={item.image} price={item.price} />)
            }
          </CartItemsList>
        </S.Left>
        <S.Space />
        <S.Right>
          <S.RightContent>
            <CartSubtotal />
            <S.CheckBoxLabel>
              <S.CheckBoxInput type="checkbox" />
              This order contains a gift
            </S.CheckBoxLabel>
            <Button height='29px' margin='16px 0 0 0' size='14px'>Procced to checkout </Button>
          </S.RightContent>
        </S.Right>
      </S.Container>
    </>
  );
}