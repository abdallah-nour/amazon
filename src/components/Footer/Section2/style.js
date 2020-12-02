import styled from 'styled-components';
import { LinkFooter } from '../style'

export const Container = styled.div`
    background-color: #131A22;
    padding: 10px 0 30px;
`;
export const Table = styled.table`
  margin: 20px auto;
  width: 100%;
  max-width: 1000px;
`;

export const Row = styled.tr`
  vertical-align:top;
  & td{padding-bottom: 1em;}
  `;

export const Space = styled.td`width: 4%;`;

export const CellContent = styled(LinkFooter)`
  padding: 0 .8em;
  display: block;
  & div{
    line-height: 1.1 ;
  }
  `;

export const Cell = ({ children }) => {
  return (
    <td>
      <CellContent underlinecolor='#999'>
        {children}
      </CellContent>
    </td>
  );
}

export const CellHeader = styled.div`
  color: #DDD;
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
  max-width: 575px;
  font-size:.75rem;
  & a {
    padding:0 .6em;
  }
`;

export const CopyARLink = styled(LinkFooter)`
`;

export const CopyARTxt = styled.span`color: #999;`;