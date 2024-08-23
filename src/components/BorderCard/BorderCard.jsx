import React from "react";

const BorderCard = ({ children}) => {
  console.log("hello");
  return <div className="px-5  shadow-lg mr-2 w-fit dark:bg-dark-blue-elements">{children}</div>;
};

export default BorderCard;
