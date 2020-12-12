import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Card from '../../components/SearchResultCard';
import { Column, Row } from '../../components/Container';
import sideList from '../../assets/side-list.png';
import * as S from './style';
import { useStateValue } from '../../components/StateProvider';

// useEffect(() => {
//   const queryString = window.location.search;
//   const parameters = new URLSearchParams(queryString);
//   const query = parameters.get('q');
//   axios.get(`https://api.rainforestapi.com/request?api_key=60125AF72CB449DF92ADE5DBB07B6C7E&type=search&amazon_domain=amazon.com&search_term=${query}&sort_by=price_high_to_low`)
//     .then(res => {
//       console.log(res.data);
//       setSearchResults(res.data.search_results);
//       return res.data;
//     })
//     .catch(err => {
//       console.log(err.message);
//     });
// }, []);

export default function Search() {
  // const [searchResults, setSearchResults] = useState();
  const [{ searchResults }, dispatch] = useStateValue();
  return (
    <>
      <Header />
      <S.Container>
        <S.Left >
          <img alt='' src={sideList} />
        </S.Left>
        <Row margin='0' xs={1} sm={2} md={3} lg={4}>
          {searchResults ?
            searchResults.map(item => {
              return <Column key={item.position}>
                <Card isReviewed={true} nmbStars={item.rating} nmbReviews={item.ratings_total} sponsoredTxt={item.sponsored} shipTxt='Ships to Palestinian Territories' currentPrice={item.price && item.price.value} descTxt={item.title} imgSrc={item.image} link={item.link} />
              </Column>
            })
            : 'loading'
          }
        </Row>
      </S.Container>
    </>
  );
}
