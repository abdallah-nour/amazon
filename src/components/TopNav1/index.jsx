import { useState } from 'react';
import * as S from './Style'
import SearchBox from './SearchBox'
import { auth } from '../../firebase'
import { useHistory } from 'react-router-dom'
import * as Txt from '../Txt'
import { useStateValue } from '../StateProvider';
import axios from 'axios';


function TopNav1({ setDarkScreen }) {
  const history = useHistory();
  const [searchField, setSearchField] = useState(' ');
  const [{ cart }, dispatch] = useStateValue();
  let numberOfItems = cart.length;

  function search(e) {
    e.preventDefault();
    history.push(`/search?q=${searchField}`);
    axios.get(`https://api.rainforestapi.com/request?api_key=60125AF72CB449DF92ADE5DBB07B6C7E&type=search&amazon_domain=amazon.com&search_term=${searchField}&sort_by=price_high_to_low`)
      .then(res => {
        console.log(res.data);
        const searchResults = res.data.search_results;
        dispatch({ type: 'EDIT_SEARCH_RESULTS', searchResults });
        return res.data;
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  function logOut() {
    auth.signOut();
    history.push('/signIn');
    console.log(auth.currentUser);
  }

  return (
    <S.Container >
      <S.Left>
        <S.MenuContainer >
          <S.Menu onClick={() => setDarkScreen(prevValue => !prevValue)}>
            <svg viewBox="0 -25 60 90" width="40" height="35" fill='white'>
              <rect width="50" height="5"></rect>
              <rect y="21" width="50" height="5"></rect>
              <rect y="42" width="50" height="5"></rect>
            </svg>
          </S.Menu>
        </S.MenuContainer>
        <S.LogoContainer to='/' onClick={logOut} >
          <S.Logo src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' />
        </S.LogoContainer>
      </S.Left >
      <SearchBox onSubmit={search} value={searchField} onChange={setSearchField} />
      <S.Right>
        <S.Lang />
        <S.UserInfo />
        <S.Orders />
        <S.CartContainer to='/cart'>
          <S.CartIconContainer>
            <S.CartNmb>{numberOfItems}</S.CartNmb>
            <S.CartIcon />
          </S.CartIconContainer>
          <Txt.P color='white' margin='10px 0 0 0' size='14px' lineHight='15px' fontWeight='700' >Cart</Txt.P>
        </S.CartContainer>
      </S.Right>
    </S.Container >
  )
}

export default TopNav1;
