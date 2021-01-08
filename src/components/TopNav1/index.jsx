// Q/ why when give hide_on_desktop a boolean true give me error
// Q/ how to prevent prop from being passed to dom, like when give prop hideOnMobile (will cause error, if reach the dom).

import * as S from "./Style";
import * as Txt from "../Txt";

import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { HeaderLink } from "../Header/style";
import SearchBox from "./SearchBox";
import { useStateValue } from "../StateProvider";

function TopNav1() {
  // ./node_modules/.bin/eslint --init
  const history = useHistory();
  const [{ cart, user }, dispatch] = useStateValue();
  const { search: searchQ } = useLocation();
  const searchQuery = searchQ.substr(3).replace(/[\+]/g, " ");
  const [searchField, setSearchField] = useState(searchQuery || "");
  const [userName, setUserName] = useState("");

  let numberOfItems = cart.length;
  useEffect(() => {
    setUserName(user.name);
  }, [user.name]);

  function search(e) {
    e.preventDefault();
    if (searchField) {
      dispatch({ type: "CLEAR_SEARCH_RESULTS" });
      let queryValue = searchField.replace(/\s/g, "+");
      history.push(`/search?q=${queryValue}`);
    }
  }

  return (
    <S.Container>
      <S.Left>
        <HeaderLink to="/" margin="0 0 0 5px" padding="0 9px 0 5px">
          <S.Logo
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </HeaderLink>
        <HeaderLink
          hide_on_mobile="true"
          display="flex"
          margin="0 6px 0 0"
          padding="6px 9px 0 6px"
        >
          <S.Location />
        </HeaderLink>
        <HeaderLink
          hide_on_desktop="true"
          display="flex"
          padding="13px 9px 7px"
          to="/cart"
        >
          <div>
            <S.CartNmb>{numberOfItems}</S.CartNmb>
            <S.CartIcon />
          </div>
          <Txt.P
            color="white"
            margin="10px 0 0 0"
            size="14px"
            lineHight="15px"
            fontWeight="700"
          >
            Cart
          </Txt.P>
        </HeaderLink>
      </S.Left>
      <SearchBox
        onSubmit={search}
        value={searchField}
        onChange={setSearchField}
      />
      <S.Right>
        <HeaderLink hide_on_mobile="true" padding="20px 8px 4px 10px">
          <S.Lang />
        </HeaderLink>
        <HeaderLink
          to={userName ? "#" : "/signin"}
          hide_on_mobile="true"
          padding="10px 5px 4px 9px"
        >
          <S.UserInfo name={userName} />
        </HeaderLink>
        <HeaderLink hide_on_mobile="true" padding="8.5px 10px">
          <S.Orders />
        </HeaderLink>
        <HeaderLink
          hide_on_mobile="true"
          display="flex"
          padding="13px 9px 7px"
          to="/cart"
        >
          <div>
            <S.CartNmb>{numberOfItems}</S.CartNmb>
            <S.CartIcon />
          </div>
          <Txt.P
            color="white"
            margin="10px 0 0 0"
            size="14px"
            lineHight="15px"
            fontWeight="700"
          >
            Cart
          </Txt.P>
        </HeaderLink>
      </S.Right>
    </S.Container>
  );
}

export default TopNav1;
