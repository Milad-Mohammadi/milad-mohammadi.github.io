import React from "react";

const TextBody80Medium = ({ text, className }) => {
  return (
    <h1
      className={`md:text-xl text-onWhite dark:text-onBlack text-opacity-80 dark:text-opacity-80 ${className}`}
    >
      {text}
    </h1>
  );
};

export default TextBody80Medium;
