import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  max-height: 230px;
  
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