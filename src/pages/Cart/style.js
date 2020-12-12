import styled from 'styled-components';

export const Container = styled.div`
  padding:30px 18px 18px;
  background-color:#EAEDED;
  display:flex;
  justify-content: space-between;
`;
export const Left = styled.div`
  width: 100%;
  max-width: 985px;
`;

export const Right = styled.div`
  width: 100%;
  max-width: 350px;
`;

export const RightContent = styled.div`
  background-color: white;
  padding: 20px;
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