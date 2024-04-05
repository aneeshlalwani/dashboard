import {
  MODEL_CHANGED,
  modelChanged,
} from "@syncfusion/ej2-react-richtexteditor";
import { colorMap } from "@syncfusion/ej2/treemap";
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
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  // Setter Functions
  const setMode = (e) => {
    setCurrentMode(e.target.value);

    // Updating the local storage, when user comes back to website, it should've selected theme
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);

    // Updating the local storage, when user comes back to website, it should've selected color
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };

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
        currentColor,
        currentMode,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// Provide state variables and functions to child components via Context.Provider
export const useStateContext = () => useContext(StateContext);
