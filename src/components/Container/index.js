import { Col, Container as ContainerB, Row as RowB } from 'react-bootstrap';

import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width:${props => props.maxWidth};
  margin: ${props => props.margin};
  `;

export const Container = styled(ContainerB)`
  padding: ${props => props.padding};
`;

export const Column = styled(Col)`
  padding: ${props => props.padding};
`;

export const Row = styled(RowB)`
  margin: ${props => props.margin || '0'};
  max-height: ${props => props.maxHeight};
  width: ${props => props.width};
  max-width: ${props => props.max_width};
`;

// Wrapper:
/* display: flex;
justify-content: space-between;
margin:0 auto; */

// Row:
/* margin-right: ${props => props.marginRight || '-25px'};
margin-left: ${props => props.marginLeft || '-25px'};
margin-bottom: ${props => props.marginBottom || '25px'};
margin-top: ${props => props.marginTop }; */



