import styled from 'styled-components'
import { Col, Row as RowB } from 'react-bootstrap';

export const Wrapper = styled.div`
  max-width:1500px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  margin:0 auto;
`;

export const Column = styled(Col)`
  padding: 0 10px;
`;

export const Row = styled(RowB)`
  margin-right: -25px;
  margin-left: -25px;
  margin-bottom: 25px;
  max-height: 420px;
`;