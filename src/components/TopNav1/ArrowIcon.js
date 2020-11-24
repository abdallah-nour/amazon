import styled from 'styled-components';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const ArrowIcon = styled(ArrowDropDownIcon)`
  color:${props => props.arrowcolor};
  transform: scale(${props => (props.scale)});
  /* padding: ${props => props.padding}; */
`;

export default ArrowIcon;