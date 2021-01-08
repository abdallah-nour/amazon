import { Link } from "react-router-dom";
import styled from "styled-components";

export const P = styled.p`
  font-size: ${(props) => props.size || "12px"};
  color: ${(props) => props.color || "#0F1111"};
  margin: ${(props) => props.margin};
  line-height: ${(props) => props.lineHeight};
  font-weight: ${(props) => props.weight};
  text-align: ${(props) => props.align};
  letter-spacing: ${(props) => props.lettersSpace};
  text-transform: capitalize;
`;
export const Span = styled.span`
  font-size: ${(props) => props.size || "12px"};
  color: ${(props) => props.color || "#0F1111"};
  margin: ${(props) => props.margin};
  line-height: ${(props) => props.lineHeight};
  font-weight: ${(props) => props.weight};
  text-align: ${(props) => props.align};
  letter-spacing: ${(props) => props.lettersSpace};
  white-space: ${(props) => props.wrap};
  text-transform: capitalize;
`;

export const H = styled.h1`
  font-size: ${(props) => props.size || "12px"};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  margin: ${(props) => props.margin};
  text-transform: ${(props) => props.capital || "capitalize"};
  letter-spacing: ${(props) => props.lettersSpace || "0.45px"};
`;

export const CustomLink = styled(Link).attrs((props) => ({
  to: props.to || "#",
}))`
  display: ${(props) => props.display};
  max-width: ${(props) => props.max_width};
  font-size: ${(props) => props.size || "12px"};
  color: ${(props) => props.color || "#0F1111"};
  font-weight: ${(props) => props.weight};
  margin: ${(props) => props.margin};
  line-height: ${(props) => props.height};
  -webkit-line-clamp: ${(props) => props.lines};
  overflow: ${(props) => (props.lines ? "hidden" : "")};
  :hover {
    color: ${(props) => props.hoverColor || "#c45500"};
  }
  text-transform: ${(props) => props.transform || "capitalize"};
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
  margin: ${(props) => props.margin || "14px"};
  ::after {
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
};
