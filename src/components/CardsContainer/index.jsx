import React from 'react'
import * as S from './style'
import Card from '../Card'
import image1 from '../../assets/card11.png'
import image2 from '../../assets/card2.png'
import { useStateValue } from '../StateProvider';

export function FirstCardsContainer() {
  const [{ user }] = useStateValue();

  return (
    <S.CardsContainer >
      <S.Row>
        <S.Column>
          <Card title={'Hi, ' + (user.name || 'Sign In')} subTitle='Recommendations for you' headerImg='https://www.amazon.com/avatar/default?customer_id=amzn1.account.AEXZAUQVVJ64YPWL72M4U6GKFY5Q&max_width=60&max_height=60&square=true'>
            <img src={image1} alt='' />
          </Card>
        </S.Column>
        <S.Column>
          <Card title='Recently viewed' linkTxt='See your browsing history' >
            <img src={image2} alt='' />
          </Card>
        </S.Column>
        <S.Column>
          <Card title='Cyber Monday deals are here' linkTxt="Shop deals before they're gone">
            <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDash_TrafficDrivers_Desktop_DashboardCard_Single_379x304_1x._SY304_CB418931269_.jpg' alt='' />
          </Card>
        </S.Column>
        <S.Column>
          <Card title='Start on your holiday list early' linkTxt='Shop Now'>
            <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg' alt='' />
          </Card>
        </S.Column>
        <S.Column>
          <Card title='Deals & Promotions' linkTxt='Shop Now'>
            <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg' alt='' />
          </Card>
        </S.Column>
        <S.Column>
          <Card title='AmazonBasics' linkTxt='See more'>
            <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg' alt='' />
          </Card>
        </S.Column>
        <S.Column>
          <Card title='Shop by Category' linkTxt='Shop Now'>
            <img src={image1} alt='' />
          </Card>
        </S.Column>
        <S.Column>
          <Card title='Computers & Accessories' linkTxt='Shop Now'>
            <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg' alt='' />
          </Card>
        </S.Column>
      </S.Row>
    </S.CardsContainer>
  )
}

export function SecondCardsContainer() {
  return (
    <S.CardsContainer >
      <S.Row>
        <S.Column>
          <Card title='Spruce up their workspace' linkTxt='Shop gifts for the home office'>
            <img src='https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Consumer_Electronics/XCM_CUTTLE_1279442_1431573_US_GH20_3459311_379x304_1X_en_US._SY304_CB419193598_.jpg' alt='' />
          </Card>
        </S.Column>
        <S.Column>
          <Card title='Stocking stuffers under $20' linkTxt='See more gift ideas'>
            <img src='https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Gifting/Manual/GiftGuides/B06XRVVVMD_desk_single_1x._SY304_CB415873843_.jpg' alt='' />
          </Card>
        </S.Column>
        <S.Column>
          <Card title='Wrap up your gift list' linkTxt='Shop all gifts'>
            <img src='https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/journeys/OTNmN2UyY2Yt/OTNmN2UyY2Yt-YTI5MDM0ODYt-w379._SY304_CB418717947_.jpg' alt='' />
          </Card>
        </S.Column>
        <S.Column>
          <Card title='Oprah’s picks for the season' linkTxt='Shop her picks now'>
            <img src='https://images-na.ssl-images-amazon.com/images/G/01/img20/events/OFT/gateway/oft20_desktop_dash_single_v3_1x._SY304_CB418937950_.jpg' alt='' />
          </Card>
        </S.Column>
      </S.Row>
    </S.CardsContainer>
  );
}

export const ThirdCardsContainer = () => {
  return (
    <S.CardsContainer >
      <S.Row>
        <S.Column>
          <Card title='Find great gifts' linkTxt='See more from Gift Finder'>
            <img src='https://images-na.ssl-images-amazon.com/images/G/01/home/Discover/XCM_CUTTLE_1278715_1424949_US_3451095_379x304_1X_en_US._SY304_CB419083366_.jpg' alt='' />
          </Card>
        </S.Column>
        <S.Column>
          <Card title='The college shop' linkTxt='Explore more'>
            <img src='https://images-na.ssl-images-amazon.com/images/G/01/home/THILGMA/HomeImprovement/XCM_CUTTLE_1283940_1461735_US_3499094_379x304_en_US._SY304_CB418307470_.jpg' alt='' />
          </Card>
        </S.Column>
        <S.Column>
          <Card title='Like-new tech gifts' linkTxt='Shop Amazon Renewed'>
            <img src='https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Certified_Refurbished/XCM_Manual_ORIGIN_1268869_1380456_US_GH20_us_hol20_traffic_revisions_us_en_3401829_379x304_2X_en_US._SY304_CB403087476_.jpg' alt='' />
          </Card>
        </S.Column>
        <S.Column>
          <Card title='Holiday Gift Guides' linkTxt='Shop your list early'>
            <img src='https://images-na.ssl-images-amazon.com/images/G/01/img20/events/Q4/Holiday/Gifthub/trafficdrivers/FlexibleDesktopCatCard_wrapearly_1x._SY304_CB404164181_.jpg' alt='' />
          </Card>
        </S.Column>
      </S.Row>
    </S.CardsContainer>
    // <S.CardsContainer >
    //   <S.Row>
    //     <S.Column>
    //       <Card title='' linkTxt=''>
    //         <img src='' alt='' />
    //       </Card>
    //     </S.Column>
    //   </S.Row>
    // </S.CardsContainer>

  );
}

export const FourthCardsContainer = () => {
  return (
    <S.CardsContainer >
      <S.Row>
        <S.Column>
          <Card title='' linkTxt=''>
            <img src='' alt='' />
          </Card>
        </S.Column>
        <S.Column>
          <Card title='' linkTxt=''>
            <img src='' alt='' />
          </Card>
        </S.Column>
        <S.Column>
          <Card title='' linkTxt=''>
            <img src='' alt='' />
          </Card>
        </S.Column>
        <S.Column>
          <Card title='' linkTxt=''>
            <img src='' alt='' />
          </Card>
        </S.Column>
      </S.Row>
    </S.CardsContainer>
  );
}
// export const FifthCardsContainer = () => {
//   return (
//     <S.CardsContainer >
//       <S.Row>
//         <S.Column>
//           <Card title='' linkTxt=''>
//             <img src='' alt='' />
//           </Card>
//         </S.Column>
//       </S.Row>
//     </S.CardsContainer>
//   );
// }