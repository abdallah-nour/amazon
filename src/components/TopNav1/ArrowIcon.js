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
export default Icon;