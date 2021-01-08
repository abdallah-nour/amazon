import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderLink = styled(Link).attrs((props) => ({
  to: props.to || "#",
}))`
  height: ${(props) => props.height || "50px"};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  display: ${(props) => props.display};
  border: 1px solid rgba(0, 0, 0, 0);
  color: white;
  border-radius: 2px;
  white-space: nowrap;
  display: ${(props) => (props.hide_on_desktop ? "none" : "")};
  &:hover {
    color: white;
    border-color: white;
  }
  @media only screen and (max-width: 800px) {
    display: ${(props) => (props.hide_on_mobile ? "none" : "flex")};
  }
`;

export const Arrow = styled.span`
  width: 6px;
  height: 6px;
  display: inline-block;
  border: solid #fff;
  border-width: 1.4px 1.4px 0 0;
  transform: rotate(135deg);
  margin: ${(props) => props.margin};
`;
