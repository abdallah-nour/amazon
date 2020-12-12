// Q/ when the page is load (make a req) 
// what's happen when we discard the req using the X in the top left???

import styled from 'styled-components';
import * as Txt from '../Txt';
import { Link } from 'react-router-dom';

export const SideMenuContainer = styled.div`
  display:block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  height: 100vh;
  z-index: 1;
`;
export const DarkScreen = styled.div`
  background-color: rgba(0, 0, 0, .8);
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${props => props.visible ? .9 : 0};
  transition:  .3s;
`;

export const CloseIcon = styled.div`
  background-image:url('https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405937547_.png');
  background-position: -190px -288px;
  position: fixed;
  left: 380px;
  top: 20px;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

export const SideMenu = styled.div`
  position: fixed;
  width: 365px;
  height: 100vh;
  overflow: scroll;
  background-color: white;
  box-shadow: 4px 0 10px 0 rgba(0,0,0,.4);
  transition: .3s;
  transform: translateX(${props => props.visible ? ('0') : ('-100%')});
  `;

export const HeaderContainer = styled.header`
  height: 50px;
  width: 100%;
  background-color: #232f3e;
  display:flex;
  align-items:center;
  padding-left: 36px;
  vertical-align: center;
`;
export const HeaderContent = styled.div`
  
`;

const MenuIcon = styled.div`
  background-position: -137px -340px;
  height: 25px;
  width: 27px;
  background-image: url('https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405937547_.png');
  margin-right: 10px;
`;

export const MenuHeader = ({isUserSignedIn, userName}) => {
  return (
    <Txt.CustomLink to='/signin'>
      <HeaderContainer>
        <MenuIcon />
        <Txt.H margin='3px 0 0 0' color='white' weight='700' size='19px' >Hello, {isUserSignedIn ? userName:'Sign in'}</Txt.H>
      </HeaderContainer>
    </Txt.CustomLink>
  );
}

const MenuBody = styled.div`
  overflow-x: hidden;
`;




// List: left/ 36px, right/20px 
export const BodyList = styled.ul`
  width: 100%;
  padding: 7px 0 30px ;
`;

export const ListDivider = styled.div`
  border-bottom: 1px solid #d5dbdb;
  margin: 5px 0;
`;

//////////// ADD THE DIVIDER FOR IT
export const ListHeader = ({ children, divider = true }) => {
  return (
    <li>
      {divider ? <ListDivider /> : ''}
      <Txt.H margin='13px 0 7px 36px' size='18px' fontWeight='700' lineHeight='24px' >{children}</Txt.H>
    </li>
  );
};

const ListItemArrow = styled.i`
    background-image:url('https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405937547_.png');
    background-position: ${props => props.direction === 'bottom' ? '-184px -342px' : '-137px -288px'};
    margin-left: ${props=> props.direction ==='bottom' ? '10px':''};
    width: ${props=> props.direction==='bottom'? '13px': '10px'};
    height: ${props=> props.direction==='bottom'? '8px': '14px'};
  `;

const ListItemContainer = styled.li`
  display:flex;
  align-items:center;
  justify-content:${props => props.direction === 'bottom' ? 'flex-start' : 'space-between'};
  padding:13px 20px 13px 36px ;
  margin-bottom: 2px;
  &:hover{
    background-color: #eaeded;
  }
  &:hover ${ListItemArrow}{
    background-position: ${props => props.direction === 'bottom' ? '-184px -361px' : '-166px -288px'};
  }
`;


export const ListItem = ({ arrow = 'true', to = '/', onClick, children }) => {
  return (
    <Link to={to} onClick={onClick}>
      <ListItemContainer >
        <Txt.Span size='14px' lineHeight='16px'>{children}</Txt.Span>
        {arrow ? <ListItemArrow /> : ''}
      </ListItemContainer>
    </Link>
  );
}

export const DropDownItem = ({ to = '/', children }) => {
  return (
    <Link to={to}>
      <ListItemContainer direction='bottom'>
        <Txt.Span size='14px' lineHeight='16px'>{children}</Txt.Span>
        <ListItemArrow direction='bottom' />
      </ListItemContainer>
    </Link>
  );
}


