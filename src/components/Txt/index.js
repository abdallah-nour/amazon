import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const P = styled.p`
  font-size: ${props => props.size || '12px'};
  color: ${props => props.color};
  margin:${props => props.margin};
  line-height: ${props => props.lineHeight};
  font-weight: ${props => props.fontWeight};
  text-align: ${props=> props.align};
  letter-spacing: ${props=> props.lettersSpace};
`;

export const H = styled.h1`
font-size: ${props => props.size || '12px'};
color: ${props => props.color};
font-weight: ${props => props.fontWeight};
line-height: ${props => props.lineHeight};
margin: ${props=> props.margin};
`;

export const CustomLink = styled(Link).attrs({ to: '/' })`
  display:${props => props.display};
  font-size: ${props => props.size || '12px'};
  color: ${props => props.color || '#0066c0'};
  margin:${props => props.margin};
  filter:  ${props => `brightness(${props.bright})`};
  :hover{color:${props => props.hoverColor || '#c45500'};}
`;


const HrTxt = styled.p`
  line-height: 1;
  font-size: 12px;
  color: #767676;
  font-weight: 400;
  z-index: 2;
  position: relative;
  display: inline-block;
  background-color: #fff;
  padding: 0 8px 0 7px;
`;

const HrContainer = styled.div`
  height: 13px;
  line-height: 0;
  text-align: center;
  margin: ${props=> props.margin || '14px'};
  ::after{
    content: "";
    width: 100%;
    background-color: transparent;
    display: block;
    height: 1px;
    border-top: 1px solid #e7e7e7;
    position: absolute;
    top: 50%;
    margin-top: -1px;
    z-index: 1;
  }
`;
export const Divide = (props) => {
  return (
    <HrContainer {...props}>
      <HrTxt>{props.children}</HrTxt>
    </HrContainer>
  );
}