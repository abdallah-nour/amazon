import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import axios from "axios";
import { useStateValue } from "../../components/StateProvider";

export default function useSearch() {
  const [filters, setFilters] = useState([]);
  const [, dispatch] = useStateValue();
  const { search } = useLocation();
  const history = useHistory();
  const searchQuery = search.substr(3).replace(/[+]/g, " ");
  const apiKey = "088A829669D44A9B8A480A30B4A4A6C0";
  // const apiKey = process.env.REACT_APP_SEARCH_API_KEY_2;
  const [refinements, setRefinements] = useState();

  useEffect(() => {
    dispatch({ type: "CLEAR_SEARCH_RESULTS" });
    if (search) {
      axios
        .get(
          `https://api.rainforestapi.com/request?api_key=${apiKey}&type=search&amazon_domain=amazon.com&search_term=${searchQuery}&sort_by=featured&${
            filters.length !== 0 ? "refinements=" + filters.join(",") : ""
          }`
        )
        .then((res) => {
          const searchResults = res.data.search_results;
          setRefinements(res.data.refinements);
          dispatch({ type: "EDIT_SEARCH_RESULTS", payload: searchResults });
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [search, filters, dispatch, apiKey, searchQuery]);

  if (!search) {
    setTimeout(() => {
      history.push("/");
    }, 1000);
    return <h1>Please enter a query value</h1>;
  }

  return [refinements, setFilters];
}
