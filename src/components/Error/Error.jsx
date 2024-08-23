import React from "react";

const Error = ({message}) => {
  return (
    <p
      className="text-light-mode dark:text-dark-mode justify-self-center"
      id="error-message"
    >
      {message}
    </p>
  );
};

export default Error;
