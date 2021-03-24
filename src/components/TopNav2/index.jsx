import * as S from "./Style";

export default function TopNav2({ setSideMenuVisibility }) {
  return (
    <S.Container>
      <S.Left>
        <S.Menu
          onClick={
            setSideMenuVisibility &&
            (() => setSideMenuVisibility((prevValue) => !prevValue))
          }
        />{" "}
        <S.ShopNavItem>Today's Deals</S.ShopNavItem>
        <S.ShopNavItem>Buy Again</S.ShopNavItem>
        <S.ShopNavItem>abdallah's Amazon.com</S.ShopNavItem>
        <S.ShopNavItem>Customer Service</S.ShopNavItem>
        <S.ShopNavItem>
          Browsing History
          {/* <Arrow margin="5px 0 0  5px" /> */}
        </S.ShopNavItem>
        <S.ShopNavItem>Gift Cards</S.ShopNavItem>
        <S.ShopNavItem>Sell</S.ShopNavItem>
        <S.ShopNavItem>Registry</S.ShopNavItem>
      </S.Left>
      <S.Right>
        {" "}
        <S.Response></S.Response>{" "}
      </S.Right>
    </S.Container>
  );
}
