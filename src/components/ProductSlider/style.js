import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 285px;
  background-color: white;
  margin: 0 20px 25px;
  padding: 20px;
  `;

export const Header = styled.header`
  font-size: 21px;
`;
export const HeaderLink = styled(Link).attrs({ to: '/' })`
  padding-left: 15px;
  font-size: 14px;
  color: #007185;
  &:hover {
    color: #C7511F ;
    text-decoration: underline;
  }
  `;

export const ScrollBox = styled.div`
  height: 225px;
  overflow:hidden;
  &:hover{ overflow-x:scroll; }
  &::-webkit-scrollbar { height: 6px; -webkit-appearance:none;}
  &::-webkit-scrollbar-track { background-color:rgba(0,0,0,0); }
  &::-webkit-scrollbar-thumb {
    box-shadow: 0 0 1px rgba(255,255,255,.5);
    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
    border-radius: 6px;
    background-color: #aaa;
    :hover{
      background-color: #888;
    }
  }
  `;

export const CarouselList = styled.ul`
  width: 100.05%;
  display:flex;
    & :not(:last-child){
      margin-right: 10px;
    }
    & a {
      display:flex;
      justify-content: center;
      min-width: 145px;
    }
    & a img{
      max-width: 270px;
      max-height: 200px;
    }
  `;

const ArrowButton = styled.button`
  padding: ${props => props.direction === 'next' ? '0 0 0 5px' : '0 5px 0 0'};
  outline: 5px auto #008296;
  border-radius: 3px 0 0 3px;
  z-index: 1;
  position: absolute;
  top: 105px;
  ${props => props.direction === 'next' ? 'right:20px' : 'left:20px'};
  background-color: white;
  height: 100px;
  line-height: 100px;
  width: 45px;
  text-align: center;
  box-shadow: 0 1px 3px #888;
  opacity: ${props => props.disable && .5};
  &:hover *{
    background-position: ${props => props.direction === 'next' ? '0 -23px' : '-14px -23px'};
  }
  `;

export const Arrow = styled.span`
  display: inline-block;
  background-image: url('https://m.media-amazon.com/images/G/01/AUIClients/AmazonGatewayAuiAssets-gw_sprite_desktop-25075f36f083535bad9a2e0edabbb339435e8e65._V2_.png');
  background-size: 132px 235px;
  background-position:${props => props.direction === 'next' ? '0 0' : '-14px 0'};
  z-index: 10;
  position: absolute;
  top: 50%;
  transform:translate(-50%, -50%);
  height: 22px;
  width: 13px;
  `;

export const NextBtn = ({ disable, onClick }) => {
  const dirc = 'next';
  return (
    <ArrowButton disable={disable} direction={dirc} onClick={onClick}>
      <Arrow direction={dirc}>
      </Arrow>  
    </ArrowButton>
  );
}

export const PrevBtn = ({ disable, onClick }) => {
  const dirc = 'prev';
  return (
    <ArrowButton disable={disable} direction={dirc} onClick={onClick}>
      <Arrow direction={dirc}>
      </Arrow>
    </ArrowButton>
  );
}
