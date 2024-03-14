import React from "react";

const TextBody70 = ({ text, className }) => {
  return (
    <h1
      className={`md:text-lg text-onWhite dark:text-onBlack text-opacity-70 dark:text-opacity-70 ${className}`}
    >
      {text}
    </h1>
  );
};

export default TextBody70;
