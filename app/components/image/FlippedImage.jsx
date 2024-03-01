import Image from "next/image";
import React from "react";

const FlippedImage = ({ isRTL, className, alt, src, height, width }) => {
  return (
    <Image
      src={src}
      alt={alt}
      height={height}
      width={width}
      className={`${className} ${isRTL ? "scale-x-[-1]" : ""}`}
    />
  );
};

export default FlippedImage;
