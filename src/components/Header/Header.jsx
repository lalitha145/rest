import React, { useContext, useState } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import ThemeContext from "../../context/ThemeContext";

const Header = () => {
  const {currentTheme, changeCurrentTheme} = useContext(ThemeContext);
  const [mode, setMode] = useState("Dark Mode");
  return (
    <header className="bg-light-mode-elements dark:bg-dark-blue-elements shadow-lg">
      <nav className="container p-2 mx-auto flex justify-between items-center py-8 dark:text-white">
        <h1 className="text-xl font-bold sm:text-2xl lg:text-4xl dark:text-dark-mode">
          Where in the world?
        </h1>
        <div className="flex gap-2 sm:gap-5 items-center" id="switch-modes">
          {mode === "Dark Mode" && <IoMoon size={35} />}
          {mode === "Light Mode" && <IoSunny size={35} />}
          <button
            className="border-none font-medium md:text-2xl"
            onClick={() => {
              mode === "Light Mode"
                ? setMode("Dark Mode")
                : setMode("Light Mode");
                changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
            }}
          >
            {mode}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
