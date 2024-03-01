import React from "react";

const TextLabelBold = ({ text, className }) => {
  return (
    <h1
      className={`text-xl font-bold md:text-2xl text-onWhite dark:text-onBlack text-opacity-70 dark:text-opacity-60 ${className}`}
    >
      {text}
    </h1>
  );
};

export default TextLabelBold;
