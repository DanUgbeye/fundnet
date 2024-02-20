"use client";

import {
  fadeIn,
  fadeInFromLeft,
  fadeInFromRight,
  fadeInFromTop,
} from "@/animation/fade-in.animation";
import { Container } from "@/components/container";
import { CircleGradientImage, DotsImage } from "@/components/decors";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className=" grid grid-cols-1 grid-rows-1 py-10 md:py-20 "
    >
      {/* DECORS */}
      <Container className=" col-start-1 row-start-1 items-start overflow-clip py-20 ">
        <motion.div
          variants={fadeInFromTop}
          initial="hidden"
          whileInView={"inView"}
          className=" ml-auto flex "
        >
          <DotsImage className=" " />
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView={"inView"}
          className=" mx-auto flex "
        >
          <CircleGradientImage className="  " />
        </motion.div>
      </Container>

      <Container className=" col-start-1 row-start-1 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            opacity: { duration: 1.5 },
            scale: { duration: 0.3 },
          }}
          viewport={{ once: true }}
          className=" grid-ros-1 mx-auto grid max-h-[20rem] w-fit grid-cols-1 place-items-center "
        >
          <h3 className="z-[2] col-start-1 row-start-1 text-lg font-semibold ">
            ABOUT US
          </h3>
        </motion.div>

        <div className=" grid items-center justify-between gap-12 md:grid-cols-2 ">
          <motion.div
            variants={fadeInFromLeft}
            initial="hidden"
            whileInView="inView"
            className="  "
          >
            <Image
              className={" max-h-[40rem] -translate-x-12 sm:translate-x-0 "}
              src={
                "/assets/fundnet-for-education/features-section/fundnet-feature-stack.svg"
              }
              alt={"decors"}
              width={454}
              height={656}
              style={{
                objectFit: "contain",
              }}
            />
          </motion.div>

          <motion.div
            variants={fadeInFromRight}
            initial="hidden"
            whileInView="inView"
            className=" flex flex-col gap-y-9 pt-20 text-left "
          >
            <h4 className=" text-2xl font-bold leading-relaxed ">
              Revolutionizing Charity: FundNet4Education&apos;s Innovative
              &quot;Education Crowdfunding&quot; Ensures Transparency,
              Accountability, and Inclusive Impact
            </h4>

            <p className=" leading-loose ">
              FundNet4Education introduces groundbreaking &quot;Charity
              Crowdfunding for Education&quot; opportunities, addressing
              concerns such as campaign credibility, an empirical and governed
              ecosystem, accountability in fund application, guaranteed digital
              inclusion, community fostering, and rewarding giving in diverse
              forms.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
