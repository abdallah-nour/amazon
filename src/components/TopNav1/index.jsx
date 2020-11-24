import * as S from './Style'
import SearchBox from './SearchBox'
import ArrowIcon from './ArrowIcon'
import usa from '../../assets/usa.png'

function TopNav1() {
  return (
    <S.Container >
      <S.Left>
        <a href='#a' >
          <S.Menu>
            <svg viewBox="0 -25 60 90" width="40" height="35" fill='white'>
              <rect width="50" height="5"></rect>
              <rect y="21" width="50" height="5"></rect>
              <rect y="42" width="50" height="5"></rect>
            </svg>
          </S.Menu>
        </a>
        <S.LogoContainer to='/' >
          <S.Logo src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' />
        </S.LogoContainer>
      </S.Left >
      <SearchBox />
      <S.Right>
        <S.Language to='/'>
          <S.LanguageContent>
            <S.Flag src={usa} />
            <ArrowIcon arrowcolor='#a7acb2' scale='.8' />
          </S.LanguageContent>
        </S.Language>
        <S.UserInfo />
        <S.Orders />
      </S.Right>
    </S.Container >
  )
}

export default TopNav1;
