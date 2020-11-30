import React, { useRef, useState, useEffect } from 'react'
import * as S from './style'
import { Link } from 'react-router-dom'
// const carousel = useRef();

// carouselRef.current.scroll(100,0);
// function handleScroll(scrollWidth, scrollLeft, setNextDisable, setPrevDisable) {
// Q
// can i reach the property scrollLeft from react component without Refs.
/* Is better to declare handleScroll fun out the component ???? */
export default function ProductSlider({ headerTxt, headerLink, children, defaultArrowBtnDisable }) {
  const [isPrevBtnDisable, setPrevBtnDisable] = useState(false);
  const [isNextBtnDisable, setNextBtnDisable] = useState(false);
  const carouselRef = useRef();
  function handleScroll() {
    const scrollValue = (carouselRef.current.clientWidth + carouselRef.current.scrollLeft);
    scrollValue == carouselRef.current.scrollWidth ? setNextBtnDisable(true) : setNextBtnDisable(false);
    (carouselRef.current.scrollLeft) == 0 ? setPrevBtnDisable(true) : setPrevBtnDisable(false);
  }

  return (
    <S.Container>
      <S.Header>
        {headerTxt}
        <S.HeaderLink>{headerLink}</S.HeaderLink>
      </S.Header>
      <S.PrevBtn disable={ defaultArrowBtnDisable || isPrevBtnDisable} onClick={() => { carouselRef.current.scroll({ left: carouselRef.current.scrollLeft - 1000, behavior: 'smooth' }) }} />
      <S.NextBtn disable={ defaultArrowBtnDisable || isNextBtnDisable} onClick={() => { carouselRef.current.scroll({ left: carouselRef.current.scrollLeft + 1000, behavior: 'smooth' }) }} />
      <S.ScrollBox ref={carouselRef} onScroll={handleScroll}>
        <S.CarouselList >
          {children.map(img => <li><Link>{img}</Link></li>)}
        </S.CarouselList>
      </S.ScrollBox>
    </S.Container >
  )
}
