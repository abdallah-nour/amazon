import MainSlider from '../../components/MainSlider';
import CardContainer from '../../components/CardContainer';
import ProductSlider from '../../components/ProductSlider';
import * as S from './style'

function Home() {
  return (
    <S.Home>
      <MainSlider />
      <CardContainer />
      <ProductSlider >
        {/* <S.ListItem src='' /> */}
      </ProductSlider>
    </S.Home>
  )
}

export default Home
