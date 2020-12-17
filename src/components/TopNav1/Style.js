import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Arrow } from './ArrowIcon';
import * as Txt from '../Txt';

const mobileWidth = '800px';

const hoverEffect = css`
  border: 1px solid rgba(0,0,0,0);
  border-radius: 2px;
    &:hover{ 
      border-color: white;
    }
`;

export const HeaderLink = styled(Link).attrs({ to: '#' })`
  height: 50px;
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  display: ${props => props.display};
  border: 1px solid rgba(0,0,0,0);
  border-radius: 2px;
  white-space:nowrap;
  display:${props => props.hideOnDesktop && 'none'};
    &:hover{ 
      border-color: white;
    }
    @media only screen and (max-width:${mobileWidth} ){
      display:${props => props.hideOnMobile ? 'none' : 'flex'};
    }
`;
/***/
export const Container = styled.div`
  display:flex;
  width: 100%;
  height: 60px;
  background-color: #131921;
  padding: 4px 10px 8px 7px;
  @media only screen and (max-width: ${mobileWidth}){
    height: auto;
    flex-direction: column;
    & > *{
      margin-bottom: 5px;
    }
    /* & :nth-child(1){
      order: 1;
    } */
  }
`;
/***/
export const MenuContainer = styled.div`cursor:pointer;`;
/***/
export const Menu = styled.div`
  border-radius: 3px;
  max-width: 38px;
  ${hoverEffect};
  border-color:rgb(102, 102, 102);
  margin-right:6px;
  margin-top:4px;
  margin: 4px 6px 0 0;
  padding-bottom: 3px;
`;
/***/
export const LogoContainer = styled(Link)`
  height: 50px;
  padding: 0 9px 0 5px;
  margin-left: 5px;
  ${hoverEffect}
`;
/***/
export const Middle = styled.div`
  display: flex;
  @media only screen and (max-width:800px){
    justify-content: space-between;
  }
`;
/***/
export const Left = styled.div`
  display: flex;
  width: 70%;
  flex:left;
  @media only screen and (max-width:800px){
  display: flex;
  width: 100%;
  flex-direction: column-reverse;
  /* margin: 0 auto; */
  }
`;
/***/
export const Logo = styled.span`
  display:inline-block;
  width: 100%;
  width: 97px;
  height: 30px;
  background-image:url('https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405937547_.png');
  background-position: -10px -51px;
  margin-top:13px;
`;
/***/

const LocationIcon = styled.div`
  background-image: url('https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405937547_.png');
  background-position: -71px -378px;
  width: 19px;
  height: 18px;
  margin-top: 12px ;
`;

export const TxtContainer = styled(Link).attrs({ to: '/' })`
  display:flex;
  margin: ${props => props.margin || '6px 0'};
  padding: ${props => props.padding || '5px 6.5px'};
  ${hoverEffect}; 
  height: 50px;
`;

export const LocationTxt = styled.p`
  font-size: ${props => props.txtSize || '13.5px'};
  font-weight : ${props => props.fontWeight}; 
  margin-top:${props => props.marginTop};
  display:flex;
  color:white;
  margin-bottom:0;
  white-space:nowrap;
  `;


export const Location = () => {
  return (
    <>
      <LocationIcon />
      <Txt.Span>
        <Txt.P color='#ccc' size='11.5px' margin='0 0 -5px' >Deliver to</Txt.P>
        <Txt.Span wrap='nowrap' color='white' size='13.5px' >Palestinian Terri...</Txt.Span>
      </Txt.Span>
    </>
  );
}

export const Right = styled.nav`
  display: flex;
  align-items:center;
  @media only screen and (max-width:800px){
    left: 0;
  }
  /* min-width:340px; */

`;
/***/
export const Language = styled(Link)`
  ${hoverEffect};
  `;
/***/
export const Flag = styled.span`
  display:inline-block;
  width: 24px;
  height:18px;
  background-image: url('https://m.media-amazon.com/images/G/01/AUIClients/InternationalCustomerPreferencesNavAssets-icp_sprite-7285cab5f8342a9a80f19b7ae5b155f77772ffc6._V2_.png');
  background-position: 0 -130px;
  /* margin:0 -1px 8px 0 ; */
  `;
/***/
export const TwoLineTxt = styled(Link)`
  padding: ${props => props.padding};
  ${hoverEffect};
  `;
export const Content = styled.div`
  padding: ${ props => props.padding};
  `;
/***/
export const TxtT = styled.p`
  font-size:${props => props.txtSize || '13.5px'};
  font-weight: ${props => props.fWeight};
  margin-top:${props => props.marginTop};
  `;
/***/
export const Lang = () => {
  return (
    <div>
      <Flag />
      <Arrow margin='0 0 4px 4px' />
    </div>
  );
}
export const UserInfo = () => {
  return (
    <>
      <TxtT txtSize='11.5px' >Hello, abdallah</TxtT>
      <TxtT marginTop='-6px' fWeight='700'>Account & Lists
      {/* <ArrowIcon arrowcolor='#a7acb2' scale='.8' top='9px' right='3px' /> */}
        <Arrow margin='9px 3px 0px 5px' />
      </TxtT>
    </>
  );
}
/***/
export const Orders = () => {
  return (
    <>
      <TxtT txtSize='11.5px'>Returns</TxtT>
      <TxtT marginTop='-5px' fWeight='700'>& Orders</TxtT>
    </>
  );
}

export const CartContainer = styled(Link)`
  display: flex;
  padding:13px 9px 7px;
  ${hoverEffect};
`;

export const CartIconContainer = styled.div`
  /* padding-bottom: 1px; */
  /* height: 39px; */
`;

export const CartIcon = styled.div`
  background-image:url('https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405937547_.png');
  background-position: -10px -340px;
  width: 38px;
  height: 26px;
`;

export const CartNmb = styled.span`
  color: #f08804;
  position: absolute;
  /* left: 17px; */
  width: 45px;
  top: -6px;
  align-self:center;
  text-align: center;
  font-weight: 700;
`;
