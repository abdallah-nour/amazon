import styled from 'styled-components';

const Icon = styled.span`
  border-style: solid;
  border-width: 4px;
  border-color: transparent;
  border-top: 4px solid ${props => props.arrowcolor} ;//
  transform: scale(${props => (props.scale)});
  position:relative;
  padding:${props => props.top + ' ' + props.right + ' '} 0 0;
`;

export const Arrow = styled.span`
  width: 6px;
  height: 6px;
  display: inline-block;
  border: solid #fff;
  border-width: 1.4px 1.4px 0 0;
  transform: rotate(135deg);
  margin:${props=> props.margin};
`;


export default Icon;


