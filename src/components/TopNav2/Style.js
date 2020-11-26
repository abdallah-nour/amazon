import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const hoverEffect = css`
  border: 1px solid rgba(0,0,0,0);
  border-radius: 2px;
  /* border: 1px solid white; */
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
  margin-top: 4px ;
`;

export const TxtContainer = styled(Link).attrs({ to: '/' })`
  display:flex;
  margin: ${props => props.margin || '6px 0'};
  padding: ${props => props.padding || '5px 6.5px'};
  ${hoverEffect}; 
`;

export const Txt = styled.p`
  font-size: ${props => props.txtSize || '13.5px'};
  font-weight : ${props => props.fontWeight}; 
  margin-top:${props => props.marginTop};
  display:flex;
  `;


export const Location = () => {
  return (
    <TxtContainer to='/' margin='2.5px 0' padding='1px 10px 0px 1px' >
      <LocationIcon />
      <div >
        <Txt txtSize='11.5px'>Deliver to</Txt>
        <Txt marginTop='-5px' fontWeight='600'>Palestinian Terri...</Txt>
      </div>
    </TxtContainer>
  );
}
/***/
export const ShopNav = styled.nav`
  display:flex;
  /* margin-right:70px ;*/
  
  & *{
    margin-right: 1px;
  }
  `;
/***/
export const ShopNavItem = ({ children }) => {
  return (
    <TxtContainer  >
      <Txt >{children}</Txt>
    </TxtContainer>
  );
}

export const Right = () => {
  return (
    <nav>
      <TxtContainer margin='6px 0 6px 60px' >
        <Txt>Amazon's response to COVID-19</Txt>
      </TxtContainer>
    </nav>
  );
}

// export const RightTxt = styled.div``;

// export const 