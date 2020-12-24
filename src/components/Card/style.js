import { Link } from 'react-router-dom';
import styled from 'styled-components'

const mobileWidth = '576px';

export const CardContainer = styled.div`
  font-size: 13px;
  background-color:white;
  max-height: 420px;
  @media only screen and (max-width:${mobileWidth}){
    margin: 0 35px;
  }
`;

export const Content = styled.div`
  height: 420px;
  position: relative;
  padding: 20px 20px 15px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display:flex;
  margin-bottom: 10px;
`;

export const HeaderImage = styled.img`
  margin-right: 15px;
`;

export const HeaderImg = (props) => {
  return (
    <Link to='/'>
      <HeaderImage {...props} />
    </Link>
  );
}

export const Body = styled.div`
margin-top:-10px;
  & img{
    display:block;
    margin: 0 auto;
    height: ${props=> props.imgMaxHeight || '100%'};
    max-width: 100%;
    object-fit: ${props=> props.imgFit || 'cover'};
  }
  `;
export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 15px;
  width:70%;
  background-color: white;
  `;
