// want to put nmbOfItems and priceOfItems as a default values for the CartSubtotal
import CurrencyFormat from 'react-currency-format';
import { P, Span } from '../Txt';
// import { nmbOfItems, priceOfItems } from '../CartState';
import { useStateValue } from '../StateProvider';

function CartSubtotal({ amount, price }) {
  const [{ cart }, dispatch] = useStateValue();
  let nmbOfItems = cart.length;
  let priceOfItems = 0;
  cart.map(item => { isNaN(+item.price) ? --nmbOfItems : priceOfItems += +item.price; });
  return (
    < CurrencyFormat
      renderText={(value) => (
        <>
          <P size='18px'>
            Subtotal ({amount || nmbOfItems} items): <Span weight='700' size='18px'>{value}</Span>
          </P>
        </>
      )
      }
      value={price || priceOfItems}
      decimalScale={2}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'$'}
    />
  );
}
export default CartSubtotal;
