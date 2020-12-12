import styled from 'styled-components'
import { Col, Row as RowB } from 'react-bootstrap';

export const Wrapper = styled.div`
  max-width:${props => props.maxWidth || '1500px'};
  padding: ${props => props.padding || '0 20px'};
  /* display: flex;
  justify-content: space-between;
  margin:0 auto; */
`;

export const Column = styled(Col)`
  padding: 0 10px 25px;
`;

export const Row = styled(RowB)`
  /* margin-right: ${props => props.marginRight || '-25px'};
  margin-left: ${props => props.marginLeft || '-25px'};
  margin-bottom: ${props => props.marginBottom || '25px'};
  margin-top: ${props => props.marginTop}; */
  margin: ${props => props.margin};
  /* max-height: 420px; */
`;
