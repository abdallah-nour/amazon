import styled from 'styled-components'
import * as Wrap from '../Container';

export const CardsWrapper = styled.div`
  max-width: 1500px;
  padding: 0 20px;
`;
export const CardsContainer = ({ children }) => {
  return (
    <CardsWrapper>
      <Wrap.Container fluid={true} padding='0 20px'>
        {children}
      </Wrap.Container>
    </CardsWrapper>
  );
}

export const Column = styled(Wrap.Column).attrs({ padding: '0 10px 25px' })``;

export const Row = styled(Wrap.Row).attrs({ xs: 1, sm: 2, md: 3, lg: 4, margin: '0 -25px 0px' })``;
