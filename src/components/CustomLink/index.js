import { Link } from "react-router-dom";
import styled from "styled-components";

const CustomLink = styled(Link)`
  font-size: ${(props) => props.fontsize};
  color: ${(props) => props.color};
  & :hover {
    color: ${(props) => props.hovercolor};
    text-decoration: ${(props) =>
      props.hoverunderline ? "underline" : "none"};
  }
`;
export default CustomLink;
