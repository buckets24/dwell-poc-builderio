import React from "react";

interface Props {
  imageSource: string;
}

function Hero({ imageSource }: Props) {
  return (
    <div className="relative w-screen">
      <img src={imageSource} className="absolute top-0 left-0 bottom-0 right-0 w-full" />
    </div>
  );
}

export default Hero;
