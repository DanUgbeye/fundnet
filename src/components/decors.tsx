import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import React from "react";

export interface DocorImageProps extends Omit<ImageProps, "src" | "alt"> {}

function DotsImage(props: DocorImageProps) {
  const { className, height, width, ...rest } = props;

  return (
    <Image
      className={cn(" max-sm:max-w-[3rem] ", className || "")}
      src={"/assets/decors/dots.svg"}
      alt={""}
      width={width || 78}
      height={height || 192}
      {...rest}
    />
  );
}

function CircleGradientImage(props: DocorImageProps) {
  const { className, height, width, ...rest } = props;

  return (
    <Image
      className={cn(" ", className || "")}
      src={"/assets/decors/circle-gradient.svg"}
      alt={""}
      width={width || 306}
      height={height || 306}
      {...rest}
    />
  );
}

function Spinner(props: DocorImageProps) {
  const { className, height, width, ...rest } = props;

  return (
    <Image
      className={cn(" duration-50 animate-spin ", className || "")}
      src={"/assets/decors/spinner.png"}
      alt={""}
      width={width || 28}
      height={height || 28}
      {...rest}
    />
  );
}

function Curve(props: DocorImageProps) {
  const { className, height, width, ...rest } = props;

  return (
    <Image
      className={cn(" ", className || "")}
      src={"/assets/decors/curve.svg"}
      alt={""}
      width={width || 135}
      height={height || 12}
      {...rest}
    />
  );
}

function RadialLines(props: DocorImageProps) {
  const { className, height, width, ...rest } = props;

  return (
    <Image
      className={cn(" ", className || "")}
      src={"/assets/decors/radial.svg"}
      alt={"decors"}
      width={width || 476}
      height={height || 476}
      style={{
        objectFit: "fill",
      }}
    />
  );
}

function GreenEllipseLine(props: DocorImageProps) {
  const { className, height, width, ...rest } = props;

  return (
    <Image
      className={cn(" ", className || "")}
      src={"/assets/decors/ellipse.svg"}
      alt={"decors"}
      width={width || 133}
      height={height || 79}
      style={{
        objectFit: "fill",
      }}
    />
  );
}

export {
  DotsImage,
  CircleGradientImage,
  Spinner,
  Curve,
  RadialLines,
  GreenEllipseLine,
};
