import styled from 'styled-components';
import * as Txt from '../Txt';

export const Card = styled.div`
  padding: 26px 12px 16px;
  max-width:249px;
  margin:20px auto 0;
  height: 100%;
  border-bottom: ${ props => props.borderBottom || '2px solid #ddd'};
`;

export const CardHeader = styled.header`
  min-height: 20px;
`;
export const CardImg = styled.img`
  margin-bottom: 8px;
  max-width: 100%;
`;

export const SponsorContainer = styled(Txt.CustomLink)`
  max-width: 297.6px;
  color: #565959; 
`;


export const SponsorIcon = styled.span`
  background-image: url('https://m.media-amazon.com/images/G/01/AUIClients/SearchStyleAssets-info_icon_with_hover_sprite_2x-f897dfc1918a6ccd515b940404f80e11271a2c96._V2_.png');
  background-size: 11px 22px; /*try to delete*/
  width: 11px;
  height: 11px;
  margin-bottom: 1px;
  display: inline-block;
  vertical-align: text-bottom;
  margin-left: 5px;
  ${SponsorContainer}:hover &{
    background-position-y: -11px;
  }

`;

export const Sponsor = () => {
  return (
    <SponsorContainer>
      Sponsored
      <SponsorIcon />
    </SponsorContainer>
  );
}

export const DescTxt = styled(Txt.CustomLink)`
  margin-top: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  color: #0F1111;
  font-size:1rem; 
  line-height:24px; 
  -webkit-line-clamp:4;
`;


const PriceContainer = styled.div`
  font-size: 12px;
  margin-top: 8px;
`;
const PriceTxt = styled.span`
  font-size: 21px;
`;

const PriceFraction = styled.span`
  position: relative;
  top: -.5em;
`;

export const Price = ({ fraction = 99, currencyIcon = '$', children }) => {
  return (
    <PriceContainer>
      <PriceFraction>{currencyIcon}</PriceFraction>
      <PriceTxt>
        {children}
      </PriceTxt>
      <PriceFraction>{fraction}</PriceFraction>
    </PriceContainer>
  );
}


const ReviewsContainer = styled.div`
  display:flex;
`;

export const ReviewsStars = styled.i`
  display:inline-block;
  background-image:url('https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIIcon-experiment_2020_1x-98977b23b0fc9845c66d40bf614bec9905194c21._V2_.png');
  width: 80px;
  height: 18px;
  background-position: -181px -56px;
  margin-top:4px;
`;

const ReviewsArrow = styled.i`
  display: inline-block;  
  margin-left:  .385em;
  padding-bottom: 13px;
  width: 7px;
  height: 5px;
  background-image:url('https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIIcon-sprite_1x-e9434610f810a3a99b3f0e49c1b938c9d76628b8._V2_.png');
  background-position: -90px -5px;
  opacity: .6;
`;

export const Reviews = ({ nmbStars, nmbReviews }) => {
  return (
    <ReviewsContainer>
      <Txt.CustomLink>
        <ReviewsStars nmbStars={nmbStars} />
        <ReviewsArrow />
      </Txt.CustomLink>
      <Txt.CustomLink size='14px' margin='2px 0 0 3px' color='#007185'>{nmbReviews}</Txt.CustomLink>
    </ReviewsContainer>
  );
}


// export const  = styled.div``;


