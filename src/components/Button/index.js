import styled from 'styled-components';


const Button = styled.button`
  display: block;
  position:${props=> props.position};
  bottom:${props=> props.bottom};
  left:${props=> props.left};
  width: ${props => props.width || '100%'};
  max-width:346px;
  height: ${props => props.height || '31px'};
  margin:${props => props.margin || '0 auto'};
  color: #111;
  background: ${props => props.bgColor || 'linear-gradient(to bottom,#f7dfa5,#f0c14b)'};
  border: 1px solid ;
  border-radius: 3px;
  border-color: ${props => props.borderColor || '#a88734 #9c7e31 #846a29'};
  font-size:${props => props.size};
  :hover{
    background: ${props => props.hoverBg || 'linear-gradient(to bottom,#f5d78e,#eeb933)'};
  }
  :focus{
    box-shadow: 0 0 3px 2px rgba(228,121,17,.5);
  }
`;
export default Button;