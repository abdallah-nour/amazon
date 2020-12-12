export const initState = {
  cart: [],
  searchResults: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case 'EDIT_CART':
      return {
        ...state,
        cart: action.newCart,
      };
    case 'EDIT_SEARCH_RESULTS':
      return {
        ...state,
        searchResults: action.searchResults,
      };
    default:
      return state;
  }
}

export default reducer;