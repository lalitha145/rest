import React from "react";
import { MoonLoader } from "react-spinners";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Spinner = () => {
  
  const {currentTheme} = useContext(ThemeContext)
  return (
    <MoonLoader className="mx-auto mt-10" color={currentTheme === 'light' ? '#000' : '#fff'} />
  );
};

export default Spinner;
