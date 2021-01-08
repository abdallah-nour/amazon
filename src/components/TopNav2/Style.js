import * as Txt from "../Txt";

import styled, { css } from "styled-components";

import { HeaderLink } from "../Header/style";

export const Container = styled.nav`
  width: 100%;
  background-color: #232f3e;
  height: 39px;
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
/***/
export const Left = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;
/***/
export const MenuIcon = styled.i`
  display: inline-block;
  width: 17px;
  height: 14px;
  margin-right: 5px;
  background-position: -172px -255px;
  background-image: url("https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405937547_.png");
`;
export const Menu = (props) => {
  return (
    <HeaderLink {...props} height="29px" padding="3px 8px 0">
      <MenuIcon />
      All
    </HeaderLink>
  );
};
/***/
export const Right = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;
/***/
export const ShopNavItem = ({ children }) => {
  return (
    <HeaderLink height="29px" padding="4px 8px 0">
      <Txt.P color="white" size="13.5px">
        {children}
      </Txt.P>
    </HeaderLink>
  );
};
/***/
export const Response = () => {
  return (
    <HeaderLink height="28px" padding="4px 6.5px 0">
      <Txt.P color="white" size="13.5px">
        Amazon's response to COVID-19
      </Txt.P>
    </HeaderLink>
  );
};
