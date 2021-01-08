import * as Txt from "../../components/Txt";

import styled from "styled-components";

const PasswordIcon = styled.i`
  display: inline-block;
  height: 13px;
  width: 14px;
  position: absolute;
  left: 2px;
  top: 4px;
  background-image: url("https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIBaseCSS-sprite_1x-c4a765aedd886dc04d89e7e93b6a02c59ecb7013._V2_.png");
  background-position: -166px -130px;
`;

export const PasswordBottomTxt = (
  <>
    <PasswordIcon />
    <Txt.P margin="0 0 0 16px" color="#2b2b2b">
      Passwords must be at least 6 characters.
    </Txt.P>
  </>
);

export const Arrow = styled.i`
  background-image: url("https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIBaseCSS-sprite_1x-c4a765aedd886dc04d89e7e93b6a02c59ecb7013._V2_.png");
  display: inline-block;
  width: 3px;
  height: 6px;
  margin: -3px 0 0 2px;
  background-position: -346px -86px;
`;
