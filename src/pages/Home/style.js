import styled from 'styled-components';
import * as Wrap from '../../components/Container';

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

export const Home = styled.div`
  width: 100%;
  background: #EAEDED ; 
  position:relative;
`;

export const SideMenuContainer = styled.div`
  display:block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  z-index: 1;
`;
export const DarkScreen = styled.div`
  background-color: rgba(0, 0, 0, .8);
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${props => props.visible ? .9 : 0};
  transition:  .3s;
`;

export const CloseIcon = styled.div`
  background-image:url('https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405937547_.png');
  background-position: -190px -288px;
  position: fixed;
  left: 380px;
  top: 20px;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

export const SideMenu = styled.div`
  position: fixed;
  height: 100%;
  width: 365px;
  background-color: white;
  box-shadow: 4px 0 10px 0 rgba(0,0,0,.4);
  transition: .3s;
  transform: translateX(${props => props.visible ? ('0') : ('-100%')});
  `;

export const SideHeader = styled.div``;