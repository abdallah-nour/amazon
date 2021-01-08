import * as S from "./style";
import * as Txt from "../Txt";

import Button from "../Button";
import { useStateValue } from "../StateProvider";

export default function SearchResultCard({
  headerContent,
  imgSrc,
  sponsoredTxt,
  descTxt,
  isReviewed = true,
  nmbStars,
  nmbReviews,
  currentPrice,
  prevPrice,
  shipTxt,
  nmbStock,
}) {
  const [{ cart }, dispatch] = useStateValue();
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        image: imgSrc,
        title: descTxt,
        price: currentPrice,
      },
    });
  };

  return (
    <S.Card>
      <S.CardHeader>{headerContent}</S.CardHeader>
      <Txt.CustomLink display="block">
        <S.CardImg src={imgSrc} />
      </Txt.CustomLink>
      {sponsoredTxt && <S.Sponsor />}
      <div>
        <S.DescTxt color="#0F1111" size="1rem" height="24px" lines="4">
          {descTxt}
        </S.DescTxt>
      </div>
      {<S.Reviews nmbStars={nmbStars} nmbReviews={nmbReviews} />}
      <S.Price>{currentPrice}</S.Price>
      <Txt.P color="#565959" margin="3px 0 35px 0">
        {shipTxt}
      </Txt.P>
      <Button
        onClick={addToCart}
        position="absolute"
        bottom="8px"
        width="50%"
        height="25px"
      >
        Add to Cart
      </Button>
    </S.Card>
  );
}
