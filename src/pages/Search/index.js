// Q in line 25
import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Card from '../../components/SearchResultCard';
import { Column, Row } from '../../components/Container';
import sideList from '../../assets/side-list.png';
import * as S from './style';
import { useStateValue } from '../../components/StateProvider';
import axios from 'axios';

export default function Search({ setSideMenuVisibility }) {
  const [{ searchResults }, dispatch] = useStateValue();
  const { search } = useLocation();
  const history = useHistory();
  const [didMount, setDidMount] = useState(false);
  let searchQuery = search.substr(3).replace(/[\+]/g, " ");
  // console.log(searchQuery);
  /* To prevent fetching data when components didn't mount yet.**/
  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, []);

  if (!searchQuery) {
    setTimeout(() => {
      history.push('/');
    }, 1000);
    return <h1>ERROR, Please enter a query value</h1>;
  }
  /***/
  let apiKey = process.env.REACT_APP_SEARCH_API_KEY;
  useEffect(() => {
    // if (searchQuery) {
    //   axios.get(`https://api.rainforestapi.com/request?api_key=${apiKey}&type=search&amazon_domain=amazon.com&search_term=${searchQuery}&sort_by=featured`)
    //     .then(res => {
    //       const searchResults = res.data.search_results;
    //       console.log(searchResults);
    //       dispatch({ type: 'EDIT_SEARCH_RESULTS', payload: searchResults });
    //     })
    //     .catch(err => {
    //       console.log(err.message);
    //     });
    // }
  }, [search]
  );
  return (
    <>
      <Header setSideMenuVisibility={setSideMenuVisibility} />
      <S.Container >
        <S.Left >
          {/* 
          we will loop on the object and get arrays
          for every array we will take the name of it and put it in <h3>
          we will loop on the array items and put them in checkboxes
          except condition, department, Review, price and weight (just make price and reviews)
          if(condition, department, Review, price and weight){
            without checkbox;
            Link onClick will add for a state (called refinements)
          }
          else{
            will make a checkbox
            
          }
          */}
          <img src={sideList} alt='' />
        </S.Left>
        <Row margin='0 0 60px' xs={1} sm={2} md={3} lg={4}>
          {searchResults.length ?
            searchResults.map(item => {
              return <Column key={item.position}>
                <Card position={item.position} isReviewed={true} nmbStars={item.rating} nmbReviews={item.ratings_total} sponsoredTxt={item.sponsored} shipTxt='Ships to Palestinian Territories' currentPrice={item.price && item.price.value} descTxt={item.title} imgSrc={item.image} link={item.link} />
              </Column>
            })
            :
            (searchQuery && didMount) && <S.LoadingAnimation src='https://images-na.ssl-images-amazon.com/images/G/01/personalization/ybh/loading-4x-gray._CB485916920_.gif' alt />
          }
        </Row>
      </S.Container>
    </>
  );
}
