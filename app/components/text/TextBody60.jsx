import React from "react";

const TextBody60 = ({ text, className }) => {
  return (
    <h1
      className={`md:text-lg text-onWhite dark:text-onBlack text-opacity-60 dark:text-opacity-60 ${className}`}
    >
      {text}
    </h1>
  );
};

export default TextBody60;
