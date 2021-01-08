import * as S from "./style";

import { Column, Row } from "../../components/Container";

import Button from "../../components/Button";
import Card from "../../components/SearchResultCard";
import Header from "../../components/Header";
import useSearch from "../../components/useSearch";
import { useState } from "react";
import { useStateValue } from "../../components/StateProvider";

export default function Search({ setSideMenuVisibility }) {
  const [{ searchResults }] = useStateValue();
  const [refinements, setFilters] = useSearch();
  let checkboxValues = {};
  refinements &&
    Object.keys(refinements).map((key) => {
      refinements[key].map(
        (item) => (checkboxValues = { ...checkboxValues, [item.value]: false })
      );
    });
  const [checkboxes, setCheckboxes] = useState(checkboxValues);
  /***/
  function handleFiltersBtn() {
    let filters = [];
    Object.keys(checkboxes).map((key) => {
      checkboxes[key] && filters.push(key);
    });
    setFilters(filters);
  }
  /***/
  function handleCheckbox(e) {
    const { target } = e;
    setCheckboxes((prevState) => ({
      ...prevState,
      [target.name]: !checkboxes[target.name],
    }));
  }
  /***/
  return (
    <>
      <Header setSideMenuVisibility={setSideMenuVisibility} />
      <S.Container>
        <S.Left>
          {refinements ? (
            <>
              {Object.keys(refinements).map((key) => (
                <S.FilterContainer key={key}>
                  <S.FilterHeader>{key}</S.FilterHeader>
                  {refinements[key].map((item) => (
                    <S.FilterItem key={item.value}>
                      <S.Label>
                        {key === "reviews" ? (
                          <>
                            <S.CheckBox
                              align="flex-end"
                              checked={checkboxes[item.value] || false}
                              onChange={handleCheckbox}
                              name={item.value}
                            />
                            <S.Stars stars={item.name.substr(0, 1)} />& Up
                          </>
                        ) : (
                          <>
                            <S.CheckBox
                              checked={checkboxes[item.value] || false}
                              onChange={handleCheckbox}
                              name={item.value}
                            />
                            {item.name}
                          </>
                        )}
                      </S.Label>
                    </S.FilterItem>
                  ))}
                </S.FilterContainer>
              ))}
              <Button width="92%" onClick={handleFiltersBtn}>
                Apply Filters
              </Button>
            </>
          ) : (
            <S.LoadingAnimation
              src="https://images-na.ssl-images-amazon.com/images/G/01/personalization/ybh/loading-4x-gray._CB485916920_.gif"
              alt
            />
          )}
        </S.Left>
        <Row margin="0 0 60px" xs={2} sm={3} md={3} lg={4}>
          {searchResults.length ? (
            searchResults.map((item) => (
              <Column key={item.position}>
                <Card
                  position={item.position}
                  isReviewed={true}
                  nmbStars={item.rating}
                  nmbReviews={item.ratings_total}
                  sponsoredTxt={item.sponsored}
                  shipTxt="Ships to Palestinian Territories"
                  currentPrice={item.price && item.price.value}
                  descTxt={item.title}
                  imgSrc={item.image}
                  link={item.link}
                />
              </Column>
            ))
          ) : (
            <S.LoadingAnimation
              src="https://images-na.ssl-images-amazon.com/images/G/01/personalization/ybh/loading-4x-gray._CB485916920_.gif"
              alt
            />
          )}
        </Row>
      </S.Container>
    </>
  );
}

{
  /* 
  we will loop on the object (refinements) and get arrays
  for every array we will take the name of it and put it in <h3>
  we will loop on the array items and put them in checkboxes
  except condition, department, Review, price and weight (just make price and reviews)
  if(condition, department, Review, price and weight){
    without checkbox;
    Link onClick will refinements.price.value add for a state (called refinements)
  }
  else{
    will make a checkbox
  }
  we will add a button to make new search request with refinements.
  put refinements (array) state in url
  &refinements=p_1,p_2
          */
}
