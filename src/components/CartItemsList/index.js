import * as S from "./style";
import * as Txt from "../Txt";

import CartSubtotal from "../CartSubtotal";
import { useStateValue } from "../StateProvider";

export default function CartItemsList({ children }) {
  const [{}, dispatch] = useStateValue();
  function clearItems() {
    dispatch({ type: "CLEAR_CART" });
  }
  return (
    <S.Container>
      <S.Header>
        <Txt.H size="28px" margin="0">
          Shopping Cart
        </Txt.H>
        <Txt.CustomLink onClick={clearItems} to="#" size="14px" color="#007185">
          Clear all items
        </Txt.CustomLink>
        <S.HeaderSmallTxt>Price</S.HeaderSmallTxt>
      </S.Header>
      <Txt.Divide margin="-22px 0 0"></Txt.Divide>
      {children}
      <S.SubtotalContainer>
        <S.SubtotalContent>
          <CartSubtotal />
        </S.SubtotalContent>
      </S.SubtotalContainer>
    </S.Container>
  );
}
