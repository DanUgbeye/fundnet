"use client";

import { AnimatePresence } from "framer-motion";
import React, { HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { fadeOut, fadeIn } from "@/animation/fade-in.animation";
import { cn } from "@/lib/utils";

interface AccordionProps extends HTMLAttributes<HTMLButtonElement> {
  title: string;
  content: string;
  expanded: boolean;
  classNames?: {
    title?: string;
    content?: string;
  };
}

function Accordion(props: AccordionProps) {
  const { title, content, className, classNames, expanded, onClick, ...rest } =
    props;

  return (
    <div
      className={cn(
        " overflow-hidden border-b border-b-theme-navy-blue-dark duration-300 ",
        className
      )}
    >
      <button
        onClick={(e) => onClick && onClick(e)}
        className={cn(
          " flex w-full items-center justify-between gap-x-3 py-3 text-left max-sm:text-sm ",
          classNames?.title || ""
        )}
        {...rest}
      >
        <span className=" w-full pl-3 ">{title}</span>
        <span className=" flex aspect-square w-10 items-center justify-center text-2xl font-medium ">
          {expanded ? "-" : "+"}
        </span>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            variants={{ ...fadeOut, ...fadeIn }}
            // initial="hidden"
            animate="inView"
            exit="exit"
            className={cn(
              " p-3 pt-0 text-justify text-sm leading-loose max-sm:text-xs ",
              classNames?.content || ""
            )}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Accordion;
