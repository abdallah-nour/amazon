import * as S from './Style';
import Arrow from '../TopNav1/ArrowIcon'
export default function TopNav2() {
  return (
    <S.Container>
      <S.Left>
        <S.Location></S.Location>
      </S.Left>
      <S.ShopNav>
        <S.ShopNavItem>Today's Deals</S.ShopNavItem>
        {/* <S.ShopNavItem>Buy Again</S.ShopNavItem> */}
        <S.ShopNavItem>abdallah's Amazon.com</S.ShopNavItem>
        <S.ShopNavItem>Customer Service</S.ShopNavItem>
        <S.ShopNavItem>Browsing History
{/**Here arrow color take the text color */}
          <Arrow scale='.8' arrowcolor='red' top='-4px' right='2px' margin='-4px -10px 0 -2px' />
        </S.ShopNavItem>
        <S.ShopNavItem>Buy Again</S.ShopNavItem>
        <S.ShopNavItem>Gift Cards</S.ShopNavItem>
        <S.ShopNavItem>Sell</S.ShopNavItem>
        <S.ShopNavItem>Registry</S.ShopNavItem>
      </S.ShopNav>
      <S.Right>

      </S.Right>
    </S.Container>
  )
}
