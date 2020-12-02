import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 14px;
`;
export const InputLabel = styled.label`
  padding-left: 2px;
  padding-bottom: 2px;
  font-weight: 700 !important;
  color: #111;
  letter-spacing: .4px;
  margin-bottom: -1px;
`; 

export const InputField = styled.input`
  height: 31px;
    padding: 3px 7px;
    border: 1px solid #a6a6a6;
    border-radius: 3px;
    border-top-color: #949494;
    width: 100%;
    box-shadow: 0 1px 0 rgba(255,255,255,.5), 0 1px 0 rgba(0,0,0,.07) inset;
    & :focus{
      border-color: #e77600;
    box-shadow: 0 0 3px 2px rgba(228,121,17,.5);
    }
`;