import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';

export default function Card({ headerImg, title, subTitle, linkTxt, children }) {
  return (
    <S.CardContainer>
      <S.Content >
        <S.Header>
          {headerImg && <S.HeaderImg src={headerImg} alt='' />}
          <S.Title>{title}</S.Title>
        </S.Header>
        {subTitle && <S.SubTitle>{subTitle}</S.SubTitle>}
        <S.Body>
          <Link to='/'>
            {children}
          </Link>
        </S.Body>
        {linkTxt && <S.Footer>
          <S.CardLink to='/'>
            {linkTxt}
          </S.CardLink>
        </S.Footer>}
      </S.Content>
    </S.CardContainer>
  )
}
