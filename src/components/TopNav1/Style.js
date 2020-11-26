import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import ArrowIcon from './ArrowIcon';
import usa from '../../assets/usa.png'

const hoverEffect = css`
  border: 1px solid rgba(0,0,0,0);
  border-radius: 2px;
    &:hover{ 
      border-color: white;
    }
  `;
/***/
export const Container = styled.div`
  width: 100%;
  height: 4.5%;
  min-height: 47px;
  max-height: 60px;
  background-color: #131921;
  padding: 6px 20px 8px 7px;
  display:flex;
`;
/***/
export const MenuContainer = styled.div`cursor:pointer;`;
/***/
export const Menu = styled.div`
  border-radius: 3px;
  max-width: 38px;
  ${hoverEffect};
  border-color:rgb(102, 102, 102);
  margin-right:6px;
  margin-top:4px;
  margin: 4px 6px 0 0;
  padding-bottom: 3px;
`;
/***/
export const LogoContainer = styled(Link)`
  width: 163px;
  margin: -2px 6px 2px 0;
  padding-top: 10px;
  height: 52px;
  ${hoverEffect}
`;
/***/
export const Left = styled.div`
  display: flex;
`;
/***/
export const Logo = styled.img`
  width: 100%;
  max-width: 97px;
  min-width: 80px;
`;
/***/
export const Right = styled.div`
  display: flex;
  align-items:center;
  min-width:361px;
`;
/***/
export const Language = styled(Link)`
  ${hoverEffect};
  `;
/***/
export const Flag = styled.img`
  width: 22px;
  height:16px;
  margin:0 -1px 8px 0 ;
  `;
/***/
export const TwoLineTxt = styled(Link)`
  padding: ${props => props.padding};
  ${hoverEffect};
  `;
export const Content = styled.div`
  padding: ${ props => props.padding};
  `;
/***/
export const Txt = styled.p`
  font-size:${props => props.txtSize || '13.5px'};
  font-weight: ${props => props.fWeight};
  margin-top:${props => props.marginTop};
  `;
/***/
export const Lang = () => {
  return (
    <Language to='/'>
      <Content padding=' 20px 8px 4px 10px '>
        <Flag src={usa} />
        <ArrowIcon arrowcolor='#a7acb2' scale='.8' right='2px' />
      </Content>
    </Language>
  );
}
export const UserInfo = () => {
  return (
    <TwoLineTxt to='/' >
      <Content padding='10px 0 4px 9px'>
        <Txt txtSize='11.5px' >Hello, abdallah</Txt>
        <Txt marginTop='-6px' fWeight='700'>Account & Lists
              <ArrowIcon arrowcolor='#a7acb2' scale='.8' top='9px' right='3px' />
        </Txt>
      </Content>
    </TwoLineTxt>
  );
}
/***/
export const Orders = () => {
  return (
    <TwoLineTxt to='/' >
      <Content padding='8.5px 10px'>
        <Txt txtSize='11.5px'>Returns</Txt>
        <Txt marginTop='-5px' fWeight='700'>& Orders</Txt>
      </Content>
    </TwoLineTxt>
  );
}