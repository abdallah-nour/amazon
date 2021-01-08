// alway make <i> display => inline-block.

import styled from "styled-components";

export const I = styled.i`
  display: inline-block;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.bg};
  background-position: ${(props) => props.bgPosition};
  position: ${(props) => props.position};
  margin: ${(props) => props.margin};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;
export const Div = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-position: ${(props) => props.bg};
  position: ${(props) => props.position};
  margin: ${(props) => props.margin};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;
