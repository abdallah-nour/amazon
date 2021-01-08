/* eslint-disable react/jsx-pascal-case */

import * as ProductsSlider from "../../components/ProductSliders";
import * as S from "./style";

import {
  FirstCardsContainer,
  SecondCardsContainer,
  ThirdCardsContainer,
} from "../../components/CardsContainer";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MainSlider from "../../components/MainSlider";

function Home({ setSideMenuVisibility }) {
  return (
    <S.Home>
      <Header setSideMenuVisibility={setSideMenuVisibility} />
      <MainSlider />
      <FirstCardsContainer />
      <ProductsSlider._1 />
      <ProductsSlider._2 />
      <ProductsSlider._3 />
      <SecondCardsContainer />
      <ProductsSlider._4 />
      <ProductsSlider._5 />
      <ThirdCardsContainer />
      <ProductsSlider._6 />
      <ProductsSlider._7 />
      <Footer />
    </S.Home>
  );
}

export default Home;
