import React, { useState } from "react";

export const StateContext = React.createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClick, setIsClick] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const handleClick = (clicked) => {
    setIsClick({ ...initialState, [clicked]: true });
  };
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClick,
        setIsClick,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {/* always have to return the children */}
      {children}
    </StateContext.Provider>
  );
};

export default ContextProvider;
// export const useStateContext = () => useContext(StateContext);
