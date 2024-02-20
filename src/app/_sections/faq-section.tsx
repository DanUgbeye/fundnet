"use client";

import {
  fadeInFromBottom,
  fadeInFromLeft,
  fadeInFromRight,
} from "@/animation/fade-in.animation";
import FAQ from "@/application/data/faq";
import { Container } from "@/components/container";
import { DotsImage } from "@/components/decors";
import FAQList from "@/components/faq-list";
import { motion } from "framer-motion";

export default function FAQSection() {
  return (
    <section className=" py-10 md:py-20 ">
      <motion.div
        variants={fadeInFromBottom}
        initial="hidden"
        whileInView="inView"
        className=" grid grid-cols-1 grid-rows-1 "
      >
        {/* DECORS */}
        <Container className=" col-start-1 row-start-1 justify-between px-6 ">
          <motion.div
            variants={fadeInFromLeft}
            initial="hidden"
            whileInView={"inView"}
            className=" -mt-[13rem] self-end "
          >
            <DotsImage className=" " />
          </motion.div>

          <motion.div
            variants={fadeInFromRight}
            initial="hidden"
            whileInView={"inView"}
            className=" max-md:hidden "
          >
            <DotsImage className=" -rotate-[10deg] " />
          </motion.div>
        </Container>

        <center className=" col-start-1 row-start-1 ">
          <Container className="  ">
            <h3 className=" mb-[5rem] text-lg font-semibold ">FAQ</h3>

            <div className=" mx-auto flex h-fit w-full max-w-2xl flex-col ">
              <FAQList faqs={FAQ} />
            </div>
          </Container>
        </center>
      </motion.div>
    </section>
  );
}
