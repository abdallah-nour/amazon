import MainSlider from '../../components/MainSlider';
import CardContainer from '../../components/CardContainer';
import ProductSlider from '../../components/ProductSlider';
import * as S from './style'

function Home() {
  return (
    <S.Home>
      <MainSlider />
      <CardContainer />
      <ProductSlider headerTxt='Discover Amazon' headerLink='Click to learn more' defaultArrowBtnDisable={true} >
        <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png' alt='' />
        <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_Currency_en_US_1X._CB451228332_.jpg' alt='' />
        <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_SecurePayment_en_US_1X._CB451228335_.jpg' alt='' />
        <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_ImportFees_en_US_1X._CB451228332_.jpg' alt='' />
        <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_TrackPackage_en_US_1X._CB451228335_.jpg' alt='' />
        <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_247CS_en_US_1X._CB451228332_.jpg' alt='' />
      </ProductSlider>
      
      {/* <Link to='/'><img src='' alt='' /></Link> */}
    </S.Home>
  )
}

export default Home
