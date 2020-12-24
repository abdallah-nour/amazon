import * as S from './style'

import { FirstCardsContainer, SecondCardsContainer, ThirdCardsContainer } from '../../components/CardsContainer';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainSlider from '../../components/MainSlider';
import ProductSlider from '../../components/ProductSlider';

function Home({ setSideMenuVisibility }) {
  return (
    <S.Home>
      <Header setSideMenuVisibility={setSideMenuVisibility} />
      <MainSlider />
      <FirstCardsContainer />
      <ProductSlider headerTxt='Discover Amazon' headerLink='Click to learn more' defaultArrowBtnDisable >
        <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png' alt='' />
        <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_Currency_en_US_1X._CB451228332_.jpg' alt='' />
        <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_SecurePayment_en_US_1X._CB451228335_.jpg' alt='' />
        <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_ImportFees_en_US_1X._CB451228332_.jpg' alt='' />
        <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_TrackPackage_en_US_1X._CB451228335_.jpg' alt='' />
        <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_247CS_en_US_1X._CB451228332_.jpg' alt='' />
      </ProductSlider>
      <ProductSlider headerTxt='Oprah’s Favorite Things' headerLink='See More' >
        <img src='https://m.media-amazon.com/images/I/416BVzcOwxL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/31IJxXTcITL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/41xNR-6HxzL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/41w+5PrHD2L._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/51OqGor2IML._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/41OeVXxIaZL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/51wA9rN0WkL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/31KKZIB0FkL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/311-ShhZI1L._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/41UKspZ5gAL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/31UHc-oM0PL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/41a20zUfd1L._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/41lielppYFL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/41D16kN5cJL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/31QsNINQfiL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/31g0UrbFzlL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/31uHNgzVKEL._AC_SY200_.jpg' alt='' />
      </ProductSlider>
      <ProductSlider headerTxt='Lightning deals' headerLink='See all deals'>
        <img src='https://images-na.ssl-images-amazon.com/images/I/41SbE-89OvL._AC_SY200_.jpg' alt='' />
        <img src='https://images-na.ssl-images-amazon.com/images/I/410wZ1Rar+L._AC_SY200_.jpg' alt='' />
        <img src='https://images-na.ssl-images-amazon.com/images/I/41W7qNjHdeL._AC_SY200_.jpg' alt='' />
        <img src='https://images-na.ssl-images-amazon.com/images/I/41UxKDjQDVL._AC_SY200_.jpg' alt='' />
        <img src='https://images-na.ssl-images-amazon.com/images/I/41OVGeBn2ZL._AC_SY200_.jpg' alt='' />
        <img src='https://images-na.ssl-images-amazon.com/images/I/41Bb6a7oj3L._AC_SY200_.jpg' alt='' />
        <img src='https://images-na.ssl-images-amazon.com/images/I/517omhm-TXL._AC_SY200_.jpg' alt='' />
        <img src='https://images-na.ssl-images-amazon.com/images/I/31jb-xkBNxL._AC_SY200_.jpg' alt='' />
        <img src='https://images-na.ssl-images-amazon.com/images/I/412Jnm-bSxL._AC_SY200_.jpg' alt='' />
        <img src='https://images-na.ssl-images-amazon.com/images/I/41-KsOfCn2L._AC_SY200_.jpg' alt='' />
        <img src='https://images-na.ssl-images-amazon.com/images/I/5187yy8mMDL._AC_SY200_.jpg' alt='' />
        <img src='https://images-na.ssl-images-amazon.com/images/I/31mogF6t9WL._AC_SY200_.jpg' alt='' />
        <img src='https://images-na.ssl-images-amazon.com/images/I/41v-x50kRML._AC_SY200_.jpg' alt='' />
      </ProductSlider>
      <SecondCardsContainer />
      <ProductSlider headerTxt='Gifts for the home' headerLink='Shop all'>
        <img src='https://m.media-amazon.com/images/I/41lhscGB8XL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/41Yo5xG2ZQL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/5145R-IpE3L._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/41S0ZKfeFtL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/51CbdM5I4LL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/31Govlh0QsL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/41P6aeMOVyL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/41UEtRlgmPL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/51HD+B6-K0L._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/41Myah6fpTL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/31WjvhpA25L._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/410nBDYX9kL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/31C7TRNxx8L._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/41IWO11dstL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/21g-kYUP9qL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/31YvSPy0X4L._AC_SY200_.jpg' alt='' />
      </ProductSlider>
      <ProductSlider headerTxt='Best Sellers in Kitchen & Dining' headerLink=''>
        <img src='https://m.media-amazon.com/images/I/414rKQ4bEaL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/41mZZ7qGHCL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/51R1p1O5xLL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/418N+kDXYoL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/31-FUITErSL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/41XT8IbwF7L._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/51P0HXlAeLL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/51wPy5eR-aL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/31a+yozn0oL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/51F8J21oyxL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/41X19ZvKATL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/31flUpPIOrL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/41qjgYtHq-L._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/31pgp7kVA6L._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/515FLb4rhdL._AC_SY200_.jpg' alt='' />
      </ProductSlider>
      <ThirdCardsContainer />
      <ProductSlider headerTxt='Kid approved' headerLink='See more from Amazon Lifestyle'>
        <img src='https://m.media-amazon.com/images/I/41S88vXlN6L._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/31VF9YiYdlL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/51u5dS+rmjL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/41an9K+6sBL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/41xXCYM6n4L._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/613ksavZ9TL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/41P9s518ejL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/41U+WxSPJHL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/51EBB2OLkcL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/51XZCUP7ALL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/51YgyYBtPuL._AC_SY200_.jpg' alt='' />
      </ProductSlider>
      <ProductSlider headerTxt='Gifts under $100' headerLink='Shop the Home Holiday Guide'>
        <img src='https://m.media-amazon.com/images/I/41hBl3JQGgL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/41f9yQp7OAL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/417VaV0VW6L._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/41P-Jjjs4iL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/41MUBAPIW7L._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/41zbDxZK2QL._AC_SY200_.jpg' alt='' />
        <img src='https://m.media-amazon.com/images/I/41KcSSNdf0L._AC_SY200_.jpg' alt='' />
      </ProductSlider>
      <Footer />
    </S.Home>
  )
}

export default Home;