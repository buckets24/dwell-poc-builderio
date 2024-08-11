"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  src: string;
  alt: string;
}

function Avatar({ src, alt }: Props) {
  return (
    <div className="w-[200px] h-[200px] relative">
      <Image
        src={src}
        alt={alt}
        fill
      />
    </div>
  );
}

export default Avatar;
