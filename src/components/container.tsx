"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    React.PropsWithChildren {}

export function Container(props: ContainerProps) {
  const { className, children, ...restProps } = props;

  return (
    <div
      className={twMerge(
        " mx-auto flex h-full w-full max-w-[100rem] flex-col px-8 sm:px-[5%] xl:px-[6rem] ",
        className || ""
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}
