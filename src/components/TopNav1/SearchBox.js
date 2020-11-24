import { useState } from 'react';
import styled, { css } from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ArrowIcon from './ArrowIcon';

const focusEffect = css`
  box-shadow: 0 0 0 2px #F90, 0 0 0 3px rgba(255, 153, 0, .5);
  z-index:1;
`;
const Search = styled.form.attrs(props => props)`
  width: 55.3%;
  height: 40px;
  border-radius:4px;
  background-color:white;
  display:flex;
  margin:4px 4px 0 0;
  ${props => props.focusEfct && focusEffect};
  @media only screen and (max-width: 820px) {
    height: 50px;
  }
`;

const DropDown = styled.a`
  text-decoration: none;
  padding: 0 3px;
  height: 40px;
  background-color:#f3f3f3;
  border-radius: 4px 0 0 4px;
  border:1px solid #cdcdcd;
  display:flex;
  justify-content: center;
  align-items:center;
  cursor:pointer;
    &:focus{
      ${focusEffect};
    }
    &:hover{
      background-color:#dadada;
    }
`;

const DropDownSpan = styled.span`
  display:flex;
  justify-content: center;
  align-items:center;
  `;
const DropDownTxt = styled.p`
  font-size: 12px;
  color:#555;
  margin: 1pt 4.4px 0 5pt;
`;

const SearchTxtField = styled.input.attrs(props => props)`
  width: 100%;
  border: 0;
  outline:0;
  padding: 0px 4px 2px 7px;
  font-size: 15px;
`;


const SearchBtn = styled.button.attrs({ type: 'submit', })`
  width:52px;
  height: 40px;
  background-color:#febd69;
  border-radius:0 4px 4px 0;
  border: 0;
  outline:0;
  cursor:pointer;
  &:focus{
    ${focusEffect};
  }
  &:hover{
    background-color:#f3a847;
  }
`;
const SearchBtnIcon = styled(SearchIcon)`
transform:scale(1.25);
padding-top:1px;
`;
const handleSubmit = (e) => {
  e.preventDefault();
}
export default function SearchBox() {
  const [focusEffect, setFocusEffect] = useState(false);
  return (
    <Search onSubmit={handleSubmit} focusEfct={focusEffect}>
      <DropDown href='#'>
        <DropDownSpan>
          <DropDownTxt>All</DropDownTxt>
          <ArrowIcon fontSize='small' arrowcolor='#555' scale='.9' />
        </DropDownSpan>
      </DropDown>
      <SearchTxtField onClick={() => setFocusEffect(true)} onBlur={() => setFocusEffect(false)} />
      <SearchBtn>
        <SearchBtnIcon />
      </SearchBtn>
    </Search>
  );
}