import React from 'react'
import * as S from './style'
import { Link } from 'react-router-dom'
import { Row, Column } from '../../Container';

export default function Section1() {
  return (
    <S.Container>
      <S.FooterBtn href='#header'>
        <S.FooterBtnContent>
          Back to top
      </S.FooterBtnContent>
      </S.FooterBtn>
      <S.Table>
        <Row margin='0' lg={4} sm={2}>
          <Column padding='10px 50px 0'>
            <S.Cell>
              <S.CellHead>
                Get to Know Us
          </S.CellHead>
              <S.CellList>
                <S.Item>Careers</S.Item>
                <S.Item>Blog</S.Item>
                <S.Item>About Amazon</S.Item>
                <S.Item>Investor Relations</S.Item>
                <S.Item>Amazon Devices</S.Item>
                <S.Item>Amazon Tours</S.Item>
              </S.CellList>
            </S.Cell>
          </Column>
          <Column padding='10px 50px 0'>
            <S.Cell>
              <S.CellHead>
                Make Money with Us
          </S.CellHead>
              <S.CellList>
                <S.Item>Sell products on Amazon</S.Item>
                <S.Item>Sell apps on Amazon</S.Item>
                <S.Item>Become an Affiliate</S.Item>
                <S.Item>Advertise Your Products</S.Item>
                <S.Item>Self-Publish with Us</S.Item>
                <S.Item>Host an Amazon Hub</S.Item>
                <S.Item>› See More Make Money <br /> with Us</S.Item>
              </S.CellList>
            </S.Cell>
          </Column>
          {/* <S.Cell divider={true}></S.Cell> */}
          <Column padding='10px 50px 0'>
            <S.Cell>
              <S.CellHead>Amazon Payment Products</S.CellHead>
              <S.CellList>
                <S.Item>Amazon Business Card</S.Item>
                <S.Item>Shop with Points</S.Item>
                <S.Item>Reload Your Balance</S.Item>
                <S.Item>Amazon Currency Converter</S.Item>
              </S.CellList>
            </S.Cell>
          </Column>
          {/* <S.Cell divider={true}></S.Cell> */}
          <Column padding='10px 50px 0'>
            <S.Cell>
              <S.CellHead>Let Us Help You</S.CellHead>
              <S.CellList>
                <S.Item>Amazon and COVID-<br />19</S.Item>
                <S.Item>Your Account</S.Item>
                <S.Item>Your Orders</S.Item>
                <S.Item>Shipping Rates &  Policies</S.Item>
                <S.Item>Returns &  Replacements</S.Item>
                <S.Item>Manage Your <br /> Content and Devices</S.Item>
                <S.Item>Amazon Assistant</S.Item>
                <S.Item>Help</S.Item>
              </S.CellList>
            </S.Cell>
          </Column>
        </Row>
      </S.Table>
      <S.Divider />
      <S.SecondSection>
        <Row lg={2} sm={1}>
          <Column padding="10px 35px 0 0" lg={3} sm={12}>
            <Link to='#'>
              <S.Logo />
            </Link>
          </Column>
          <Column padding="10px 0 0 0" lg={9}>
            <S.BtnContainer>
              <Link to='#'>
                <S.BtnsContent>
                  <S.EarthIcon position='-77px -24px' url='https://m.media-amazon.com/images/G/01/AUIClients/InternationalCustomerPreferencesNavAssets-icp_sprite-7285cab5f8342a9a80f19b7ae5b155f77772ffc6._V2_.png' />
                  <S.BtnTxt >English</S.BtnTxt>
                  <S.LanguageArrow position='-77px -80px' url='https://m.media-amazon.com/images/G/01/AUIClients/InternationalCustomerPreferencesNavAssets-icp_sprite-7285cab5f8342a9a80f19b7ae5b155f77772ffc6._V2_.png' />
                </S.BtnsContent>
              </Link>
              <Link to='#'>
                <S.BtnsContent>
                  <S.Icon>$</S.Icon>
                  <S.BtnTxt>USD - U.S. Dollar</S.BtnTxt>
                </S.BtnsContent>
              </Link>
              <Link to='#'>
                <S.BtnsContent>
                  <S.Flag position='-54px -108px' url='https://m.media-amazon.com/images/G/01/AUIClients/InternationalCustomerPreferencesNavAssets-icp_sprite-7285cab5f8342a9a80f19b7ae5b155f77772ffc6._V2_.png' />
                  <S.BtnTxt>United States</S.BtnTxt>
                </S.BtnsContent>
              </Link>
            </S.BtnContainer>
          </Column>
        </Row>
      </S.SecondSection>
    </S.Container>
  )
}
