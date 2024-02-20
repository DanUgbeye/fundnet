import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import React from "react";

export interface LogoProps extends Omit<ImageProps, "src" | "alt"> {}

function FundnetLogo(props: LogoProps) {
  const { className, height, width, ...rest } = props;

  return (
    <Image
      className={cn("  ", className || "")}
      src={"/assets/logo/fundnet-logo.png"}
      alt={"Unical Fundnet Logo"}
      width={height || 130}
      height={width || 40}
      {...rest}
    />
  );
}

export { FundnetLogo };
