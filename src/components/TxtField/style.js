import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: ${(props) => props.marBottom || "14px"};
`;

export const InputLabel = styled.label`
  padding-left: 2px;
  padding-bottom: 1px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #111;
  letter-spacing: 0.4px;
`;

export const Header = styled.div`
  margin-bottom: -8px;
`;

export const RightSpan = styled.span`
  position: absolute;
  right: 0;
  font-size: 13px;
`;

export const InputField = styled.input`
  height: 31px;
  padding: 3px 7px;
  border: 1px solid #a6a6a6;
  border-radius: 3px;
  border-top-color: #949494;
  width: 100%;
  :focus {
    border-color: #e77600;
    box-shadow: 0 0 3px 2px rgba(228, 121, 17, 0.5);
  }
  ${(props) => {
    return props.error
      ? `
    border-color: #d00;
    box-shadow: 0 0 0 3px rgba(221,0,0,.1) inset;
    `
      : " box - shadow: 0 1px 0 rgba(255, 255, 255, .5), 0 1px 0 rgba(0, 0, 0, .07) inset;";
  }}
`;

export const BottomDiv = styled.div`
  margin-top: 4px;
  color: red;
`;
