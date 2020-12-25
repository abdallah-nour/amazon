export const initState = {
  cart: [],
  searchResults: [],
  user: {},
};

let cartItemId = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...action.payload,
            id: cartItemId++
          }],
      };
    case 'EDIT_CART':
      return {
        ...state,
        cart: action.payload,
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };
    case 'EDIT_SEARCH_RESULTS':
      return {
        ...state,
        searchResults: action.payload,
      };
    case 'CLEAR_SEARCH_RESULTS':
      return {
        ...state,
        searchResults: [],
      };
    case 'UPDATE_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'DELETE_USER':
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
}

export default reducer;