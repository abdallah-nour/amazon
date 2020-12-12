import styled from 'styled-components'
import { Col, Row as RowB } from 'react-bootstrap';

export const Wrapper = styled.div`
  max-width:${props => props.maxWidth || '1500px'};
  padding: ${props => props.padding || '0 20px'};
`;

export const Column = styled(Col)`
  padding: 0 10px 25px;
`;

export const Row = styled(RowB)`
  margin: ${props => props.margin};
`;