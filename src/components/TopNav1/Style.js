import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import ArrowIcon from './ArrowIcon';

const hoverEffect = css`
  border: 1px solid rgba(0,0,0,0);
    &:hover{ 
      border-color: white;
    }
`;

export const Container = styled.div`
  width: 100%;
  height: 4.5%;
  min-height: 47px;
  max-height: 60px;
  background-color: #131921;
  padding: 6px 20px 8px 7px;
  display:flex;
`;
export const Menu = styled.div`
  border-radius: 3px;
  margin-right:6px;
  max-width: 38px;
  ${hoverEffect};
  margin-top:4px;
  border-color:rgb(102, 102, 102);
`;
export const LogoContainer = styled(Link).attrs(props => props)`
  width: 163px;
  margin: -2px 6px 2px 0;
  padding-top: 10px;
  height: 52px;
  ${hoverEffect}
`;
export const Left = styled.div`
  /* max-width: 217px; */
  display: flex;
`;
export const Logo = styled.img.attrs(props => props)`
  width: 100%;
  max-width: 97px;
  min-width: 80px;
`;


export const Right = styled.div`
display: flex;
`;

export const Language = styled(Link).attrs(props => props)`
padding: 6px 8px 16px ;
${hoverEffect};
height: 50px;
`;

export const LanguageContent = styled.span``;
export const Flag = styled.img.attrs(props => props)`
  width: 22px;
  height:16px;
  margin: 0 -1px -8px 0 ;
  `;

/***/
export const TwoLineTxt = styled(Link)`
  ${hoverEffect};
  height: 50px;
`;
export const TwoLineTxtContent = styled.div`
  padding: ${props => props.padding};
`;
export const TwoLineTxt1 = styled.p`
  font-size:12px;
`;
export const TwoLineTxt2 = styled.p`
  font-size:14px;
  font-weight: 700;
  margin-top:${props => props.marginTop};
  `;
/***/
export const UserInfo = () => {
  return (
    <TwoLineTxt>
      <TwoLineTxtContent padding='10px 0 16px 8px'>
        <TwoLineTxt1>Hello, abdallah</TwoLineTxt1>
        <TwoLineTxt2 marginTop='-12px'>Account & Lists
              <ArrowIcon arrowcolor='#a7acb2' scale='.8' />
        </TwoLineTxt2>
      </TwoLineTxtContent>
    </TwoLineTxt>
  );
}
/***/
export const Orders = () => {
  return (
    <TwoLineTxt>
      <TwoLineTxtContent padding='10px 10px 16px 8px'>
        <TwoLineTxt1>Returns</TwoLineTxt1>
        <TwoLineTxt2 >& Orders</TwoLineTxt2>
      </TwoLineTxtContent>
    </TwoLineTxt>
  );
}

// export const  = styled.``;
