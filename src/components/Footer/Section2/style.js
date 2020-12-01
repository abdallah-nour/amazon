import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div`
    background-color: #131A22;
    padding: 10px 0 30px;
    margin-bottom: 30px;
`;
export const Table = styled.table`
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  display: flex;
`;

export const Row = styled.tr`
line-height: normal;
/* margin-right: 50px; */
  & a{
    margin-bottom:20px;
  }
`;
// export const Cell = styled.td`
// `;

export const Cell = styled(Link)`
  padding: 0 .75em;
  :hover{
    text-decoration: underline;
    color: #999;
  }
`;

export const CellHeader = styled.div`
  color: #DDD;
  font-size: 11px;
  line-height: 115%;
`;
export const CellBody = styled.span`
  text-decoration-color: white;
  color: #999;
  font-size: 10px;
`;