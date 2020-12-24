import styled, { css } from 'styled-components';

import { useState } from 'react';

// import ArrowIcon from './ArrowIcon';

const focusEffect = css`
  box-shadow: 0 0 0 2px #F90, 0 0 0 3px rgba(255, 153, 0, .5);
  z-index:1;
`;

const Search = styled.form`
  width: 100%;
  height: 40px;
  border-radius:4px;
  background-color:white;
  display:flex;
  margin:4px 14px 0 7px;
  ${props => props.hasFocusEffect && focusEffect};
  @media only screen and (max-width:800px){
  margin: 0 auto;
  }
`;

const DropDown = styled.div`
  padding: 0 3px;
  background-color:#f3f3f3;
  border-radius: 4px 0 0 4px;
  border:1px solid #cdcdcd;
  display:flex;
  justify-content: center;
  align-items:center;
  cursor:pointer;
    &:focus{
      ${focusEffect} ;
    }
    &:hover{
      background-color:#dadada;
    }
`;

const DropDownContent = styled.span`
  display:flex;
  justify-content: center;
  align-items:center;
  `;
const DropDownTxt = styled.p`
  font-size: 12px;
  color:#555;
  margin: 1pt 2.5px 0 5pt;
`;

const SearchTxtField = styled.input.attrs({ type: 'text' })`
  width: 95%;
  padding: 0px 4px 2px 7px;
  font-size: 15px;
`;


const SearchBtn = styled.button.attrs({ type: 'submit', })`
  height: 40px;
  min-width: 45px;
  background-color:#febd69;
  border-radius:0 4px 4px 0;
  cursor:pointer;
  background-image: url('https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405937547_.png');
  background-position: 2px -280px;
  &:focus{
    ${focusEffect};
  }
  &:hover{
    background-color:#f3a847;
  }
`;


const ArrowIcon = styled.span`
  border-style: solid;
  border-width: 4px;
  border-color: transparent;
  border-top: 4px solid ${props => props.arrowcolor} ;
  transform: scale(${props => (props.scale)});
  position:relative;
  padding:${props => props.top + ' ' + props.right + ' '} 0 0;
`;

const Select = styled.select`
  
`;

export default function SearchBox({ onSubmit, value, onChange }) {
  const [focusEffect, setFocusEffect] = useState(false);
  return (
    <Search onSubmit={onSubmit} hasFocusEffect={focusEffect}>
      <DropDown >
        <DropDownContent>
          <DropDownTxt>All</DropDownTxt>
          <ArrowIcon fontSize='small' arrowcolor='#555' scale='.9' />
        </DropDownContent>
      </DropDown>

      <SearchTxtField value={value} onChange={(e) => onChange(e.target.value)} onClick={() => setFocusEffect(true)} onBlur={() => setFocusEffect(false)} />
      <SearchBtn>
      </SearchBtn>
    </Search>
  );
}