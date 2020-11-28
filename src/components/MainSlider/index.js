import React from 'react'
import * as S from './style'
import Carousel from 'react-bootstrap/Carousel'

export default function MainSlider() {
  return (
    <S.Container>
      <Carousel nextIcon={<S.NextArrow />} prevIcon={<S.PrevArrow />} indicators={false}>
        <Carousel.Item >
          <S.SliderImage
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/CyberMonday/Fuji_TallHero_CM_v2_en_US_1x._CB414209152_.png"
          />
        </Carousel.Item>
        <Carousel.Item>
          <S.SliderImage
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG2_en_US_1x._CB418256337_.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <S.SliderImage
            className="d-block w-100"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <S.SliderImage
            className="d-block w-100"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <S.SliderImage
            className="d-block w-100"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <S.SliderImage
            className="d-block w-100"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
          />
        </Carousel.Item>
      </Carousel>
    </S.Container>
  )
}
