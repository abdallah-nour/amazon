import { useState } from 'react';
import * as S from './Style'
import SearchBox from './SearchBox'
import { auth } from '../../firebase'
import { useHistory } from 'react-router-dom'
import * as Txt from '../Txt'
import { useStateValue } from '../StateProvider';
import axios from 'axios';
import { Row } from '../Container';

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
      {/* <S.MenuContainer >
          <S.Menu onClick={() => setDarkScreen(prevValue => !prevValue)}>
            <svg viewBox="0 -25 60 90" width="40" height="35" fill='white'>
              <rect width="50" height="5"></rect>
              <rect y="21" width="50" height="5"></rect>
              <rect y="42" width="50" height="5"></rect>
            </svg>
          </S.Menu>
        </S.MenuContainer> */}
      <S.Middle>
        <S.HeaderLink margin='0 0 0 5px' padding='0 9px 0 5px' onClick={logOut} >
          <S.Logo src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' />
        </S.HeaderLink>
        <S.HeaderLink hideOnMobile display='flex' margin='0 6px 0 0' padding='6px 9px 0 6px' >
          <S.Location />
        </S.HeaderLink>
        <S.HeaderLink hideOnDesktop display="flex" padding='13px 9px 7px' to='/cart'>
          <div>
            <S.CartNmb>{numberOfItems}</S.CartNmb>
            <S.CartIcon />
          </div>
          <Txt.P color='white' margin='10px 0 0 0' size='14px' lineHight='15px' fontWeight='700' >Cart</Txt.P>
        </S.HeaderLink>
      </S.Middle>
      <SearchBox onSubmit={search} value={searchField} onChange={setSearchField} />
      <S.Right>
        <S.HeaderLink hideOnMobile padding='20px 8px 4px 10px'  >
          <S.Lang />
        </S.HeaderLink>
        <S.HeaderLink hideOnMobile padding='10px 5px 4px 9px' >
          <S.UserInfo />
        </S.HeaderLink>
        <S.HeaderLink hideOnMobile padding='8.5px 10px' >
          <S.Orders />
        </S.HeaderLink>
        <S.HeaderLink hideOnMobile display="flex" padding='13px 9px 7px' to='/cart'>
          <div>
            <S.CartNmb>{numberOfItems}</S.CartNmb>
            <S.CartIcon />
          </div>
          <Txt.P color='white' margin='10px 0 0 0' size='14px' lineHight='15px' fontWeight='700' >Cart</Txt.P>
        </S.HeaderLink>
      </S.Right>
    </S.Container >
  )
}

export default TopNav1;
