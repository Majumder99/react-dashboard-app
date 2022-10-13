import React, { useState } from "react";

export const StateContext = React.createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notfication: false,
};

const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  return (
    <StateContext.Provider value={{ activeMenu }}>
      {/* always have to return the children */}
      {children}
    </StateContext.Provider>
  );
};

export default ContextProvider;
// export const useStateContext = () => useContext(StateContext);
