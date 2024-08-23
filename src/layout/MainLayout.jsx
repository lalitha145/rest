import React from "react";
import { ThemeContextWrapper } from "../context/ThemeContext";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <ThemeContextWrapper>
     
        <Header></Header>
        <Outlet></Outlet>
     
    </ThemeContextWrapper>
  );
};

export default MainLayout;
