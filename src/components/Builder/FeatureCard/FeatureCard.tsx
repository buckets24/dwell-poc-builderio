"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  bgImage?: string;
  alt?: string;
  minWidth?: string;
  minHeight?: string;
  textColor?: string;
  title?: string;
  subtitle?: string;
  align?: "start" | "center" | "end";
}

function FeatureCard({
  bgImage,
  alt,
  minWidth,
  minHeight,
  textColor,
  title,
  subtitle,
  align = "start",
}: Props) {
  return (
    <div
      className="relative rounded-lg overflow-hidden p-4 flex bg-cover bg-no-repeat"
      style={{
        minWidth,
        minHeight,
        color: textColor,
        alignItems: align,
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {title && (
        <div className="relative z-10 flex items-start flex-col">
          <h5 className="text-2xl font-semibold tracking-normal" style={{ color: textColor }}>{title}</h5>
          <h6 className="text-sm font-medium tracking-normal" style={{ color: textColor }}>{subtitle}</h6>
        </div>
      )}
      {/*{bgImage && (
        <Image
          src={bgImage}
          alt={alt || ""}
          fill
          className="absolute z-0"
        />
      )}*/}
    </div>
  );
}

export default FeatureCard;
