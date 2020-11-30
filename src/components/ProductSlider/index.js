import React, { useRef, useState, useEffect } from 'react'
import * as S from './style'

// const carousel = useRef();

// carouselRef.current.scroll(100,0);
// function handleScroll(scrollWidth, scrollLeft, setNextDisable, setPrevDisable) {
// Q
// can i reach the property scrollLeft from react component without Refs.
/* Is better to declare handleScroll fun out the component ???? */
export default function ProductSlider({ headerTxt, headerLink, children }) {
  const [scrollX, setScrollX] = useState(0);
  const [isPrevBtnDisable, setPrevDisable] = useState(false);
  const [isNextBtnDisable, setNextDisable] = useState(false);
  const carouselRef = useRef();
  function handleScroll() {
    const scrollValue = (carouselRef.current.clientWidth + carouselRef.current.scrollLeft);
    scrollValue == carouselRef.current.scrollWidth ? setNextDisable(true) : setNextDisable(false);
    (carouselRef.current.scrollLeft) == 0 ? setPrevDisable(true) : setPrevDisable(false);
  }

  return (
    <S.Container>
      <S.Header>
        {headerTxt}Discover Amazon
        <S.HeaderLink>{headerLink}Click to learn more</S.HeaderLink>
      </S.Header>
      <S.PrevBtn disable={isPrevBtnDisable} onClick={() => { carouselRef.current.scroll({ left: carouselRef.current.scrollLeft - 1000, behavior: 'smooth' }) }} />
      <S.NextBtn disable={isNextBtnDisable} onClick={() => { carouselRef.current.scroll({ left: carouselRef.current.scrollLeft + 1000, behavior: 'smooth' }) }} />
      <S.ScrollBox ref={carouselRef} onScroll={handleScroll}>
        <S.CarouselList >
          {children}
          <S.ListItemImage src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png' />
          <S.ListItemImage src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_Currency_en_US_1X._CB451228332_.jpg' />
          <S.ListItemImage src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_SecurePayment_en_US_1X._CB451228335_.jpg' />
          <S.ListItemImage src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_ImportFees_en_US_1X._CB451228332_.jpg' />
          <S.ListItemImage src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_TrackPackage_en_US_1X._CB451228335_.jpg' />
          <S.ListItemImage src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_247CS_en_US_1X._CB451228332_.jpg' />
          {/* <S.ListItem src='' /> */}
        </S.CarouselList>
      </S.ScrollBox>
    </S.Container >
  )
}
