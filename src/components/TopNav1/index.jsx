import React from 'react'
import * as S from './Style'
import './style.css'
function TopNav1() {
  return (
    <S.Container >
      <S.Left>
        <a href='#' >
          <S.Menu>
            <svg viewBox="0 -25 60 90" width="40" height="35" fill='white'>
              <rect width="50" height="5"></rect>
              <rect y="21" width="50" height="5"></rect>
              <rect y="42" width="50" height="5"></rect>
            </svg>
          </S.Menu>
        </a>
        <S.LogoContainer href='#' >
          <img className='logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' />
        </S.LogoContainer>
      </S.Left >
    </S.Container >
  )
}

export default TopNav1;
