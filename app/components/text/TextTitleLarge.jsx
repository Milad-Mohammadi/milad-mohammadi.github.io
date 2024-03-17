import React from "react";

const TextTitleLarge = ({ text, className }) => {
  return (
    <h1 className={`text-2xl font-bold md:text-3xl lg:text-4xl ${className}`}>
      {text}
    </h1>
  );
};

export default TextTitleLarge;
