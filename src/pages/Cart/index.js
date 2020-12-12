import { useState } from 'react'
import CartList from '../../components/CartList';
import CartItem from '../../components/CartItem';
import Header from '../../components/Header';
import CartSubtotal from '../../components/CartSubtotal';
import Button from '../../components/Button';
import { useStateValue } from '../../components/StateProvider';
import * as S from './style';

export default function Cart() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <>
      <Header />
      <S.Container>
        <S.Left>
          <CartList>
            {
              cart.map((item, index) => <CartItem key={item.position || index} index={index} descTxt={item.title} imgSrc={item.image} price={item.price} />)
            }
          </CartList>
        </S.Left>
        <S.Space />
        <S.Right>
          <S.RightContent>
            {/* <CartSubtotal /> */}
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