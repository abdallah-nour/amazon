import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();
export const StateProvider = ({ reducer, initState, children }) => {
  const valueToContext = useReducer(reducer, initState);
  return (
    <StateContext.Provider value={valueToContext}>
      {children}
    </StateContext.Provider>
  );
};
export const useStateValue = () => useContext(StateContext);
