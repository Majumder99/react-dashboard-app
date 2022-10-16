import React, { useState } from "react";

export const StateContext = React.createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
  isClick: false,
};

const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClick, setIsClick] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("themeColor", color);
    setThemeSettings(false);
  };

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
        currentColor,
        currentMode,
        setCurrentColor,
        setCurrentMode,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
      }}
    >
      {/* always have to return the children */}
      {children}
    </StateContext.Provider>
  );
};

export default ContextProvider;
// export const useStateContext = () => useContext(StateContext);
