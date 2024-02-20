import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import React from "react";

interface ActivatedInstitutionProps extends LinkProps {
  name: string;
  logo?: React.JSX.Element;
}

export default function ActivatedInstitution(props: ActivatedInstitutionProps) {
  const { name, logo, ...rest } = props;

  return (
    <Link
      {...rest}
      className={cn(
        " grid w-full max-w-sm grid-cols-[minmax(6rem,auto),1fr] items-center justify-center gap-4 rounded-2xl bg-theme-navy-blue-light px-8 py-5 text-left text-xl duration-300 hover:scale-105 sm:text-2xl "
      )}
    >
      {logo}
      <span className=" font-semibold uppercase ">{name}</span>
    </Link>
  );
}
