import React from "react";

const TextBody70 = ({ text, className }) => {
  const formattedText = text.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
  return (
    <p
      className={`md:text-lg text-onWhite dark:text-onBlack text-opacity-70 dark:text-opacity-70 ${className}`}
    >
      {formattedText}
    </p>
  );
};

export default TextBody70;
