"use client";
import React from "react";
import Accordion from "./accordion";
import { FAQ } from "@/application/data/faq";

export interface FAQListProps {
  faqs: FAQ[];
}

export default function FAQList(props: FAQListProps) {
  const { faqs } = props;
  const [expandedFAQ, setExpandedFAQ] = React.useState<number | null>(null);

  function handleClick(expandedIndex: number) {
    if (expandedFAQ === expandedIndex) {
      setExpandedFAQ(null);
    } else {
      setExpandedFAQ(expandedIndex);
    }
  }

  return (
    <div className=" flex flex-col ">
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          title={faq.question}
          content={faq.answer}
          expanded={expandedFAQ === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}
