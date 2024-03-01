import React from "react";

const TextHeader = ({ text, className }) => {
  return (
    <h1
      className={`text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl ${className}`}
    >
      {text}
    </h1>
  );
};

export default TextHeader;
