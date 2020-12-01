import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import * as S from './style';

export default function Footer() {
  return (
    <S.Container>
      <Section1 />
      <Section2 />
    </S.Container>
  )
}
