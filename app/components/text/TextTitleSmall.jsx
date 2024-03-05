import React from "react";

const TextTitleSmall = ({ text, className }) => {
  return (
    <h1 className={`text-lg font-bold md:text-xl lg:text-1xl ${className}`}>
      {text}
    </h1>
  );
};

export default TextTitleSmall;
