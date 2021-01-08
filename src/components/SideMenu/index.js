// 1)state for : last sub list(lang, country, SignStates).
// make the country state an obj so it hold the name and the flag.

import * as Bg from "../Background";
import * as S from "./style";

import { useEffect, useState } from "react";

import { auth } from "../../firebase";
import { useStateValue } from "../../components/StateProvider";

export default function SideMenu({ visible, setVisibility }) {
  const [userName, setUserName] = useState("");
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    setUserName(user.name);
  }, [user.name]);

  function logOut() {
    auth.signOut();
    dispatch({ type: "DELETE_USER" });
  }

  return (
    <S.SideMenuContainer visible={visible}>
      <S.DarkScreen visible={visible} onClick={() => setVisibility(!visible)}>
        <S.CloseIcon></S.CloseIcon>
      </S.DarkScreen>
      <S.SideMenu visible={visible}>
        <S.MenuHeader userName={userName} />
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
          <S.ListItem arrow={false}>
            <Bg.I
              margin="0 9.5px -3px 0"
              width="15px"
              height="15px"
              bgPosition="-77px -51px"
              bg='url("https://m.media-amazon.com/images/G/01/AUIClients/InternationalCustomerPreferencesNavAssets-icp_sprite-7285cab5f8342a9a80f19b7ae5b155f77772ffc6._V2_.png")'
            />{" "}
            English
          </S.ListItem>
          <S.ListItem arrow={false}>
            <Bg.I
              margin="0 8px -1px 0"
              width="18px"
              height="12px"
              bgPosition="-54px -108px"
              bg='url("https://m.media-amazon.com/images/G/01/AUIClients/InternationalCustomerPreferencesNavAssets-icp_sprite-7285cab5f8342a9a80f19b7ae5b155f77772ffc6._V2_.png")'
            />
            United States
          </S.ListItem>
          <S.ListItem arrow={false}>Help</S.ListItem>
          {userName ? (
            <S.ListItem onClick={logOut} arrow={false}>
              Sign Out
            </S.ListItem>
          ) : (
            <S.ListItem to="/signIn" arrow={false}>
              Sign In
            </S.ListItem>
          )}
        </S.BodyList>
      </S.SideMenu>
    </S.SideMenuContainer>
  );
}
