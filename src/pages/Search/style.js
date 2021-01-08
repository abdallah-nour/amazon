import * as Txt from "../../components/Txt";

import styled from "styled-components";

export const Container = styled.div``;

export const Left = styled.div`
  float: left;
  width: 230px;
  margin: 12px 12px 0 15px;
  height: min-content;
  border-right: 2px solid #ddd;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Right = styled.div``;

export const LoadingGif = styled.img`
  max-width: 100%;
`;
const LoadingContainer = styled.div`
  min-width: 90%;
  height: 42vh;
  min-height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoadingAnimation = ({ src }) => {
  return (
    <LoadingContainer>
      <LoadingGif src={src} />
    </LoadingContainer>
  );
};

export const FilterForm = styled.form``;
export const FilterContainer = styled.div`
  margin: 0 5px 15px;
`;

export const FilterHeader = styled(Txt.P)`
  font-size: 16px;
  margin: 0 0 6px 0;
  font-weight: bold;
  overflow-wrap: break-word;
`;

export const FilterItem = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 1.4;
`;

export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  height: 20px;
  margin-right: 2px;
  size: 23px;
  align-self: ${(props) => props.align || "flex-start"};
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 0.1em;
  :hover {
    color: #c45500;
  }
`;

export const Stars = styled.i`
  display: block;
  background-image: url("https://m.media-amazon.com/images/S/sash/3-fm1Jbg4IHlyhq.png");
  height: 22px;
  width: 95px;
  margin-right: 1px;
  background-position: ${(props) => {
    switch (props.stars) {
      case "4":
        return "-2px -84px";
      case "3":
        return "-293px -180px";
      case "2":
        return "-99px -132px";
      case "1":
        return "-390px -228px";
    }
  }};
`;
