import React, { createContext, useContext, useState } from "react";

// Step 1: Create a new context called StateContext
const StateContext = createContext();

// Define the initial state for different application states
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

// Step 2: Define the ContextProvider component to manage state and provide context
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  // Function to handle click events and update isClicked state
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };
  // Provide state variables and functions to child components through Context.Provider
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// Provide state variables and functions to child components via Context.Provider
export const useStateContext = () => useContext(StateContext);
