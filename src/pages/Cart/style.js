import styled from 'styled-components';

const mobileWidth = '1070px';

export const Container = styled.div`
  padding:30px 18px 18px;
  background-color:#EAEDED;
  min-height: 100vh;
  display:flex;
  justify-content: space-between;
  @media only screen and (max-width:${mobileWidth}){
    justify-content: flex-end;
    flex-direction:column-reverse;
  }
`;
export const Left = styled.div`
  width: 70%;
  margin:0 auto;
  @media only screen and (max-width: ${mobileWidth}){
    width: 90%;
  }
`;

export const Right = styled.div`
  width: 39%;
  margin: 0 auto;
  max-width: 350px;
  @media only screen and (max-width: ${mobileWidth}){
    background-color: white;
    width: 90%;
    max-width: unset;
  }
`;

export const RightContent = styled.div`
  background-color: white;
  padding: 20px;
  margin: 0 auto;
  max-width: 390px;
`;

export const CheckBoxLabel = styled.label`
  display:flex;
  align-items: center;
  font-size: 14px;
`;

export const CheckBoxInput = styled.input`
  margin-right: 5px;
`;
export const Space = styled.div`
  width: 20px;
  height: 20px;
`;