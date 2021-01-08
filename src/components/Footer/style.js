import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  /* min-width: 1000px; */
`;
export const LinkFooter = styled(Link).attrs({ to: "#" })`
  color: #ddd;
  &:hover {
    color: #ddd;
    text-decoration: underline;
    text-decoration-color: ${(props) => props.underline_color};
  }
`;
