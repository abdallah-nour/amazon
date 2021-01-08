import * as S from "./style";
import * as Txt from "../Txt";

import CurrencyFormat from "react-currency-format";
import { useState } from "react";
import { useStateValue } from "../../components/StateProvider";

export default function CartItem({ index, imgSrc, descTxt, price }) {
  const [isSelectItem, setIsSelected] = useState(true);
  const [isGift, setIsGift] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [{ cart }, dispatch] = useStateValue();
  function deleteItem() {
    cart.splice(index, 1);
    dispatch({ type: "EDIT_CART", payload: cart });
  }
  return (
    <>
      <S.Container>
        <S.Left>
          <S.CheckBox value={isSelectItem} onChange={setIsSelected} />
          <S.ItemImg imgSrc={imgSrc}></S.ItemImg>
          <S.PriceTxt hide_on_desktop>
            <CurrencyFormat
              renderText={(value) => value}
              value={price}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </S.PriceTxt>
        </S.Left>
        <S.Right>
          <Txt.CustomLink
            display="inline-block"
            height="26px"
            color="#007185"
            size="18px"
            weight="700"
            margin="0"
          >
            {descTxt}
          </Txt.CustomLink>
          <Txt.P align="left" color="#007600" margin="1px 0 0 0">
            In Stock
          </Txt.P>
          <S.IsGift value={isGift} handleChange={setIsGift} />
          <S.ControlRow>
            <S.QuantitySelect value={quantity} onChange={setQuantity} />
            <S.ControlRowDivider />
            <Txt.CustomLink onClick={deleteItem} color="#007185">
              Delete
            </Txt.CustomLink>
            <S.ControlRowDivider />
            <Txt.CustomLink color="#007185">Save for later</Txt.CustomLink>
            <S.ControlRowDivider />
            <Txt.CustomLink color="#007185">
              Compare with similar items
            </Txt.CustomLink>
          </S.ControlRow>
        </S.Right>
        <S.PriceTxt hide_on_mobile>
          <CurrencyFormat
            renderText={(value) => value}
            value={price}
            decimalScale={2}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </S.PriceTxt>
      </S.Container>
      <Txt.Divide margin="20px 0 0 0" />
    </>
  );
}
