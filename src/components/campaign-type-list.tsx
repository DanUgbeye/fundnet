"use client";
import { CampaignType } from "@/application/data/campaign-types";
import React from "react";
import Accordion from "./accordion";

export interface CampaignTypeListProps {
  campaignTypes: CampaignType[];
}

function CampaignTypeList(props: CampaignTypeListProps) {
  const { campaignTypes } = props;
  const [expandedType, setExpandedType] = React.useState<number | null>(null);

  function handleClick(expandedIndex: number) {
    if (expandedType === expandedIndex) {
      setExpandedType(null);
    } else {
      setExpandedType(expandedIndex);
    }
  }

  return (
    <div className=" flex min-h-[25rem] flex-col sm:min-h-[23rem] ">
      {campaignTypes.map((type, index) => (
        <Accordion
          key={index}
          title={type.title}
          content={type.description}
          expanded={expandedType === index}
          onClick={() => handleClick(index)}
          className=" px-2 "
          classNames={{
            title: " h-10 ",
            content: " py-2 ",
          }}
        />
      ))}
    </div>
  );
}

export default CampaignTypeList;
