import React from "react";

const TextTitleSmall = ({ text, className }) => {
  return (
    <h1 className={`text-xl font-bold md:text-1xl lg:text-2xl ${className}`}>
      {text}
    </h1>
  );
};

export default TextTitleSmall;
