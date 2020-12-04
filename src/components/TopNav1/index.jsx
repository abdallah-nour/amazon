import * as S from './Style'
import SearchBox from './SearchBox'
import { auth } from '../../firebase'
import { useHistory } from 'react-router-dom'
import * as Txt from '../Txt'

function TopNav1() {
  const history = useHistory();

  function logOut() {
    auth.signOut();
    history.push('/signIn');
    console.log(auth.currentUser);
  }

  return (
    <S.Container >
      <S.Left>
        <S.MenuContainer >
          <S.Menu>
            <svg viewBox="0 -25 60 90" width="40" height="35" fill='white'>
              <rect width="50" height="5"></rect>
              <rect y="21" width="50" height="5"></rect>
              <rect y="42" width="50" height="5"></rect>
            </svg>
          </S.Menu>
        </S.MenuContainer>
        <S.LogoContainer to='/signIn' onClick={logOut} >
          <S.Logo src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' />
        </S.LogoContainer>
      </S.Left >
      <SearchBox />
      <S.Right>
        <S.Lang />
        <S.UserInfo />
        <S.Orders />
        <S.CartContainer to='/'>
          <S.CartIconContainer>
            <S.CartNmb>0</S.CartNmb>
            <S.CartIcon />
          </S.CartIconContainer>
          <Txt.P margin='10px 0 0 0' size='14px' lineHight='15px' fontWeight='700' >Cart</Txt.P>
        </S.CartContainer>
      </S.Right>
    </S.Container >
  )
}

export default TopNav1;
