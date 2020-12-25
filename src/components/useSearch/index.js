import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import axios from 'axios';
import { useStateValue } from '../../components/StateProvider';

export default function useSearch() {
  const [filters, setFilters] = useState([]);
  const [{ }, dispatch] = useStateValue();
  const { search } = useLocation();
  const history = useHistory();
  const searchQuery = search.substr(3).replace(/[\+]/g, " ");
  const apiKey = process.env.REACT_APP_SEARCH_API_KEY;
  const [refinements, setRefinements] = useState();

  if (!search) {
    setTimeout(() => {
      history.push('/');
    }, 1000);
    return <h1> Please enter a query value</h1>;
  }

  useEffect(() => {
    dispatch({type:'CLEAR_SEARCH_RESULTS'});
    console.log('will do these filters/ ', filters);
    // axios.get(`https://api.rainforestapi.com/request?api_key=${apiKey}&type=search&amazon_domain=amazon.com&search_term=${searchQuery}&sort_by=featured&${filters.length !== 0 ? 'refinements=' + filters.join(',') : ''}`)
    axios.get(`https://api.rainforestapi.com/request?api_key=98C395E074A84E16A7983EA782645EF3&type=search&amazon_domain=amazon.com&search_term=${searchQuery}&sort_by=featured&${filters.length !== 0 ? 'refinements=' + filters.join(',') : ''}`)
      .then(res => {
        const searchResults = res.data.search_results;
        setRefinements(res.data.refinements);
        console.log(res.data);
        dispatch({ type: 'EDIT_SEARCH_RESULTS', payload: searchResults });
      })
      .catch(err => {
        console.log(err.message);
      });
  }, [search, filters]);
  return [refinements, setFilters];
}

