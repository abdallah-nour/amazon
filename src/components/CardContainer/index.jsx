import React from 'react'
import * as S from './style'
import Card from '../Card'
import { Container, Col } from 'react-bootstrap/'
import image1 from '../../assets/card11.png'
import image2 from '../../assets/card2.png'

export default function CardContainer() {
  return (
    <S.Wrapper>
      <Container fluid>
        <S.Row xs={1} sm={2} md={3} lg={4}>
          <S.Column>
            <Card title='Hi, abdallah' subTitle='Recommendations for you' headerImg='https://www.amazon.com/avatar/default?customer_id=amzn1.account.AEXZAUQVVJ64YPWL72M4U6GKFY5Q&max_width=60&max_height=60&square=true'>
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
        </S.Row>
        
        <S.Row xs={1} sm={2} md={3} lg={4}>
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
      </Container>
    </S.Wrapper>
  )
}
