import { P, Span } from "../Txt";

import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";

function CartSubtotal() {
  const [{ cart }] = useStateValue();
  let nmbOfItems = cart.length;
  let totalPrice = 0;
  cart.forEach((item) => {
    isNaN(+item.price) ? --nmbOfItems : (totalPrice += +item.price);
  });
  return (
    <CurrencyFormat
      renderText={(value) => (
        <>
          <P size="18px">
            Subtotal ({nmbOfItems} items):{" "}
            <Span weight="700" size="18px">
              {value}
            </Span>
          </P>
        </>
      )}
      value={totalPrice}
      decimalScale={2}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
    />
  );
}
export default CartSubtotal;
