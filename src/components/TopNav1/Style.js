import * as Txt from "../Txt";

import { Arrow } from "../Header/style";
import styled from "styled-components";

/***/
const mobileWidth = "800px";
/***/
export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #131921;
  padding: 4px 10px 8px 7px;
  @media only screen and (max-width: ${mobileWidth}) {
    height: auto;
    flex-direction: column;
  }
`;
/****/
// const Arrow = styled.span`
//   width: 6px;
//   height: 6px;
//   display: inline-block;
//   border: solid #fff;
//   border-width: 1.4px 1.4px 0 0;
//   transform: rotate(135deg);
//   margin:${props=> props.margin};
// `;
/***/
export const Left = styled.div`
  display: flex;
  @media only screen and (max-width: 800px) {
    justify-content: space-between;
    margin-bottom: 5px;
  }
`;
/***/
export const Logo = styled.i`
  display: inline-block;
  width: 100%;
  width: 97px;
  height: 30px;
  background-image: url("https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405937547_.png");
  background-position: -10px -51px;
  margin-top: 13px;
`;
/***/
const LocationIcon = styled.i`
  display: inline-block;
  background-image: url("https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405937547_.png");
  background-position: -71px -378px;
  width: 19px;
  height: 18px;
  margin-top: 12px;
`;
/***/
export const Location = () => {
  return (
    <>
      <LocationIcon />
      <Txt.Span>
        <Txt.P color="#ccc" size="11.5px" margin="0 0 -5px">
          Deliver to
        </Txt.P>
        <Txt.Span wrap="nowrap" color="white" size="13.5px">
          Palestinian Terri...
        </Txt.Span>
      </Txt.Span>
    </>
  );
};
/***/
export const Right = styled.nav`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 800px) {
    left: 0;
  }
`;
/***/
export const Flag = styled.span`
  display: inline-block;
  width: 24px;
  height: 18px;
  background-image: url("https://m.media-amazon.com/images/G/01/AUIClients/InternationalCustomerPreferencesNavAssets-icp_sprite-7285cab5f8342a9a80f19b7ae5b155f77772ffc6._V2_.png");
  background-position: 0 -130px;
`;
/***/
export const Content = styled.div`
  padding: ${(props) => props.padding};
`;
/***/
export const TxtT = styled.p`
  font-size: ${(props) => props.txtSize || "13.5px"};
  font-weight: ${(props) => props.fWeight};
  margin-top: ${(props) => props.marginTop};
`;
/***/
export const Lang = () => {
  return (
    <div>
      <Flag />
      <Arrow margin="0 0 4px 4px" />
    </div>
  );
};
/***/
export const UserInfo = ({ name }) => {
  return (
    <>
      <Txt.P color="white" size="11.5px">
        Hello, {name || "Sign In"}
      </Txt.P>
      <Txt.P color="white" margin="-6px 0 0 0" weight="700" size="13.5px">
        Account & Lists
        <Arrow margin="9px 3px 0px 5px" />
      </Txt.P>
    </>
  );
};
/***/
export const Orders = () => {
  return (
    <>
      <TxtT txtSize="11.5px">Returns</TxtT>
      <TxtT marginTop="-5px" fWeight="700">
        & Orders
      </TxtT>
    </>
  );
};
/***/
export const CartIcon = styled.div`
  background-image: url("https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405937547_.png");
  background-position: -10px -340px;
  width: 38px;
  height: 26px;
`;
/***/
export const CartNmb = styled.span`
  color: #f08804;
  position: absolute;
  width: 45px;
  top: -6px;
  align-self: center;
  text-align: center;
  font-weight: 700;
`;
