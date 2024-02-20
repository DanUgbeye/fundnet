import { Container } from "@/components/container";
import React from "react";

export default function DiscoverySection() {
  return (
    <section className=" py-10 md:py-20 ">
      <Container className=" space-y-8 ">
        <center>
          <h2 className=" text-lg font-semibold ">DISCOVER</h2>
        </center>

        <div className=" space-y-8 ">
          {/* AUTH CAMPAIGNS */}
          <div className=" space-y-2 ">
            <h4 className=" text-sm font-bold ">Auth Campaigns</h4>

            <div className=" h-80 bg-neutral-500 "></div>
          </div>

          {/* TRENDING CAMPAIGNS */}
          <div className=" space-y-2 ">
            <h4 className=" text-sm font-bold ">Trending Campaigns</h4>

            <div className=" h-80 bg-neutral-500 "></div>
          </div>

          {/* COMPELLING CAMPAIGNS */}
          <div className=" space-y-2 ">
            <h4 className=" text-sm font-bold ">Compelling Campaigns</h4>

            <div className=" h-80 bg-neutral-500 "></div>
          </div>

          {/* INSTITUTIONAL CAMPAIGNS */}
          <div className=" space-y-2 ">
            <h4 className=" text-sm font-bold ">Institutional Campaigns</h4>

            <div className=" h-80 bg-neutral-500 "></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
