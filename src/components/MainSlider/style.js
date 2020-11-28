import styled from 'styled-components';
import { Link } from 'react-router-dom'
import arrow from "../../assets/arrow.png"

export const Container = styled.div`
  max-height: 250px;
`;

export const NextArrow = styled.span`
  background-image: url(${arrow});
  background-size: 68px 52px;
  position: absolute;
  top: 20.5%;
  right: 7%;
  transform: translate(-50%,-50%);
  background-position: -44px 0;
  background-repeat: no-repeat;
  height: 46px;
  width: 22px;
`;

export const PrevArrow = styled.span`
  height: 52px;
  width: 34px;
  background-image: url(${arrow});
  background-size: 68px 52px;
  background-repeat: no-repeat;
  background-position: 0 0;
  position: absolute;
  top: 21%;
  left: 20%;
  transform: translate(-50%,-50%);
`;

export const Image = styled.div`
  background-image: url(${props => props.image});
  min-width: 100%;
  height: 600px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
export const SliderImage = (props) => {
  return (
    <Link to='/'>
      <Image {...props} />
    </Link>
  )
}