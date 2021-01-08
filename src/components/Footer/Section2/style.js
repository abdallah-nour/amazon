import { LinkFooter } from "../style";
import { Row as RowB } from "../../Container";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #131a22;
  padding: 10px 0 30px;
`;
export const Table = styled.table`
  width: 100%;
  max-width: 1060px;
`;

export const Row = styled(RowB)`
  max-width: ${(props) => props.max_width};
  margin: 20px auto;
  & > * {
    margin-bottom: 12px;
    white-space: nowrap;
  }
  @media only screen and (min-width: 1000px) {
    & > * {
      flex: 0 0 14.285%;
      max-width: 14.285%;
    }
  }
`;

export const CellContent = styled(LinkFooter)`
  /* padding: 0 .8em; */
  display: block;
  & div {
    line-height: 1.1;
  }
`;

export const Cell = ({ children }) => {
  return (
    <div>
      <CellContent underlinecolor="#999">{children}</CellContent>
    </div>
  );
};

export const CellHeader = styled.div`
  color: #ddd;
  font-size: 11px;
  line-height: 10px;
`;

export const CellBody = styled.div`
  text-decoration-color: white;
  color: #999;
  font-size: 10px;
`;

export const CopyAndRights = styled.div`
  margin: 0 auto;
  max-width: 630px;
  font-size: 0.75rem;
  white-space: nowrap;
  text-align: center;
`;

export const CopyARLink = styled(LinkFooter)``;

export const CopyARTxt = styled.span`
  color: #999;
`;
