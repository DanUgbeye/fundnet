import { Container } from "@/components/container";
import { FundnetLogo } from "@/components/logo";
import React from "react";

export default function PartnersSection() {
  return (
    <section className="  ">
      <center className=" mb-4 ">
        <h2 className=" font-semibold text-lg ">OUR PARTNERS</h2>
      </center>

      <div className=" flex gap-x-12 pb-12 ">
        {Array(20)
          .fill("")
          .map((_, index) => (
            <FundnetLogo key={index} className=" w-60 " />
          ))}
      </div>
    </section>
  );
}
