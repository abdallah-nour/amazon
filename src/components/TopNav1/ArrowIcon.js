import styled from 'styled-components';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Icon = styled(ArrowDropDownIcon)`
  color:${props => props.arrowcolor} ;
  transform: scale(${props => (props.scale)});
  position:relative;
  top: ${props => props.top};
  right : ${props => props.right};
`;

export default Icon;