import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const CardContainer = styled.div`
  font-size: 13px;
  background-color:white;
  max-height: 420px;
`;

export const Content = styled.div`
  min-height: 420px;
  position: relative;
  padding: 20px 20px 15px;
`;

export const Header = styled.header`
  display:flex;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-size: 20px;
  line-height: 27px;
  font-weight: 700;
`;

export const SubTitle = styled.p`
  font-weight: 700;
  margin-bottom: 14px;
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
    height: 100%;
    max-width: 100%;
    object-fit:cover;
  }
  `;
export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 20px;
  height: 40px;
  width: 100%;
  max-width: 270px;
  background-color: white;
  `;
export const CardLink = styled(Link)`
  position: absolute;
  bottom: 0;
  color: #007185;
  font-size: 13px;
`;
