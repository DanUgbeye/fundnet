import { Container } from "@/components/container";
import { CircleGradientImage } from "@/components/decors";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className=" lg:pb-30 relative grid grid-cols-1 grid-rows-1 pb-32 ">
      <Container className=" absolute z-[1] col-start-1 row-start-1 flex flex-row justify-center overflow-x-clip ">
        <CircleGradientImage className=" size-[15rem] xl:size-[35rem] animate-pulse " />
      </Container>

      <Container className=" z-[2] col-start-1 row-start-1 ">
        <center className=" space-y-12 pb-12 pt-20 ">
          <div className=" space-y-4 ">
            <h1 className=" w-full max-w-3xl text-3xl font-bold md:text-5xl ">
              Smart Charity Crowdfunding for everyone
            </h1>

            <p className=" max-w-md text-sm ">
              Fund critical needs, support creative ideas, and unlock human
              potential.
            </p>
          </div>

          <div className="  ">
            <Button
              variant={"ghost"}
              size={"lg"}
              className=" cursor-pointer rounded-full hover:text-white bg-theme-green/80 text-white duration-500 hover:bg-theme-green hover:duration-500"
              asChild
            >
              <Link href={"/"}>Get Started</Link>
            </Button>
          </div>
        </center>
      </Container>
    </section>
  );
}
