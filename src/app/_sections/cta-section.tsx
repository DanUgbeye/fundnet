import { Container } from "@/components/container";
import Mapper from "@/components/mapper";
import { UserPlus, HelpingHand, FolderCog } from "lucide-react";
import React from "react";
import { FaHandshake } from "react-icons/fa6";
import { MdOutlineCampaign } from "react-icons/md";

export default function CTASection() {
  return (
    <section className=" py-10 md:py-20 ">
      <Container className=" ">
        <div className=" grid grid-cols-[repeat(auto-fit,minmax(0,20rem))] justify-center gap-8 ">
          <Mapper
            id="cta-list"
            list={[
              {
                title: "Create Account",
                sub: "  ",
                icon: UserPlus,
              },
              {
                title: "Create Campaign",
                sub: "  ",
                icon: MdOutlineCampaign,
              },
              {
                title: "Manage Campaign",
                sub: "  ",
                icon: FolderCog,
              },
              {
                title: "Support Campaign",
                sub: "  ",
                icon: FaHandshake,
              },
              {
                title: "Fund Campaign",
                sub: "  ",
                icon: FaHandshake,
              },
            ]}
            component={(props) => {
              const {
                item: { title, sub, icon: Icon },
              } = props;

              return (
                <div className=" grid h-full w-full items-center ">
                  <div className=" rounded-lg border border-theme-navy-blue-dark p-6 duration-500 hover:scale-105 hover:border-transparent hover:bg-theme-green hover:text-white ">
                    <center className=" space-y-3 ">
                      <Icon className=" size-16 " />
                      <h4 className=" text-lg font-semibold ">{title}</h4>
                      {sub && <p className="  "></p>}
                    </center>
                  </div>
                </div>
              );
            }}
          />
        </div>
      </Container>
    </section>
  );
}
