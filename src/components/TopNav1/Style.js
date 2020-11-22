import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 4.5%;
min-height: 47px;
max-height: 60px;
background-color: #131921;
padding: 10px 20px 8px 7px;
`;
export const Menu = styled.div`
border: 1px solid rgb(102, 102, 102);
border-radius: 3px;
max-width: 38px;
  :hover {
  border-color: white;
}
`;
export const LogoContainer = styled.a.attrs(props => props)`
width: 100%;
max-width: 163px;
margin: -6px 0 2px 6px;
padding-top: 10px;
border: 1px solid #131921;
  &:hover{
  border-color: white;
}
`;
export const Left = styled.div`
max-width: 217px;
display: flex;
`;
export const Search = styled.div`
width: 100%;
height: 10px;
`;
export const DropDown = styled.div``;
// export const  = styled.``;