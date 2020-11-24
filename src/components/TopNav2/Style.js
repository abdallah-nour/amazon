import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const hoverEffect = css`
  /* border: 1px solid rgba(0,0,0,0); */
  border: 1px solid white;
    &:hover{ 
      border-color: white;
    }
`;

export const Container = styled.nav`
  width:100%;
  background-color:#232f3e;
  height:39px;
  display:flex;
  padding: 0 10px;
`;
/***/

export const Left = styled.nav`
margin-right: 45px;
display:flex;
`;

const LocationIcon = styled(LocationOnIcon)`
margin-top: 4px;
`;

export const TxtContainer = styled(Link)`
${hoverEffect}; 
  margin: ${props => props.margin || '6px 0'};
  display:flex;
  padding: ${props => props.padding};
`;
export const TxtContent = styled.div`
  /* padding: ${props => props.padding}; */
`;
export const Txt1 = styled.p`
  font-size: 12px;
`;
export const Txt2 = styled.p`
  font-size: 14px;
  font-weight : ${props => props.fontWeight}; 
  margin-top:${props => props.marginTop};
  `;


export const Location = () => {
  return (
    <TxtContainer margin='2.5px 0' padding='1px 10px 0px 1px' >
      <LocationIcon />
      <TxtContent >
        <Txt1>Deliver to</Txt1>
        <Txt2 fontWeight='700'>Palestinian Terri...</Txt2>
      </TxtContent>
    </TxtContainer>
  );
}
/***/
export const ShopNav = styled.nav`
  display:flex;
  & *{
    margin-right: 1px;
  }
`;
export const ShopNavItem = ({ children }) => {
  return (
    <TxtContainer padding='5px 7px' >
      <Txt2 >{children}</Txt2>
    </TxtContainer>

  );
}




// export const 