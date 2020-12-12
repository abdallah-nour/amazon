// 1)state for : last sub list(lang, country, SingStates).
// make the country state an obj so it hold the name and the flag.
// 2) make the isUserSignedIn boolean know if the user is signed in or n't.
// Q3) in line 12.
// Q4) why the history.push(''), don't work, in signOut function
// Q5) store user name when register account
// and the user name here and put it in the header.
import { useState } from 'react';
import * as S from './style';
import * as Bg from '../Background';
import { auth } from '../../firebase';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function SideMenu({ visible, setVisible }) {
  const history = useHistory(); /* Q3 */ /* why when put it inside signOut it will make an error. */
  const [isUserSignedIn, setUserSignIn] = useState(true);
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log('Yes user');
      setUserSignIn(true);
    } else {
      console.log('No user');
      setUserSignIn(false);
    }
  });

  function logOut() {
    auth.signOut();
    history.push('/signIn');
    console.log(isUserSignedIn ? '!! Signed out !!' : '!! go to Sign in !!');
  }
  return (
    <S.SideMenuContainer visible={visible} >
      <S.DarkScreen visible={visible} onClick={() => setVisible(!visible)}>
        <S.CloseIcon ></S.CloseIcon>
      </S.DarkScreen>
      <S.SideMenu visible={visible}>
        <S.MenuHeader isUserSignedIn={isUserSignedIn} userName={''} />
        <S.BodyList>
          <S.ListHeader divider={false}>Digital Content & Devices</S.ListHeader>
          <S.ListItem>Amazon Music</S.ListItem>
          <S.ListItem>Kindle E-readers & Books</S.ListItem>
          <S.ListItem>Appstore for Android</S.ListItem>
          {/*  */}
          <S.ListHeader>Shop By Department</S.ListHeader>
          <S.ListItem>Electronics</S.ListItem>
          <S.ListItem>Computers</S.ListItem>
          <S.ListItem>Smart Home</S.ListItem>
          <S.ListItem>Arts & Crafts</S.ListItem>
          <S.DropDownItem>See All {/* */}</S.DropDownItem>
          {/*  */}
          <S.ListHeader>Programs & Features</S.ListHeader>
          <S.ListItem>Gift Cards</S.ListItem>
          <S.ListItem arrow={false}>#FounditOnAmazon</S.ListItem>
          <S.ListItem>Amazon Live</S.ListItem>
          <S.ListItem>International Shopping</S.ListItem>
          <S.DropDownItem>See All {/* */}</S.DropDownItem>
          <S.ListItem arrow={false}>Full Store Directory</S.ListItem>
          {/*  */}
          <S.ListHeader>Help & Settings</S.ListHeader>
          <S.ListItem arrow={false}>Your Account</S.ListItem>
          <S.ListItem arrow={false}><Bg.I margin='0 9.5px -3px 0' width='15px' height='15px' bgPosition='-77px -51px' bg='url("https://m.media-amazon.com/images/G/01/AUIClients/InternationalCustomerPreferencesNavAssets-icp_sprite-7285cab5f8342a9a80f19b7ae5b155f77772ffc6._V2_.png")' /> English</S.ListItem>
          <S.ListItem arrow={false}><Bg.I margin='0 8px -1px 0' width='18px' height='12px' bgPosition='-54px -108px' bg='url("https://m.media-amazon.com/images/G/01/AUIClients/InternationalCustomerPreferencesNavAssets-icp_sprite-7285cab5f8342a9a80f19b7ae5b155f77772ffc6._V2_.png")' />United States</S.ListItem>
          <S.ListItem arrow={false}>Help</S.ListItem>
          {/* <Link onClick={logOut} > */}
            <S.ListItem onClick={logOut} arrow={false}>{isUserSignedIn ? 'Sign Out' : 'Sign In'}</S.ListItem>
          {/* </Link> */}
        </S.BodyList>
      </S.SideMenu>
    </S.SideMenuContainer>
  )
}
