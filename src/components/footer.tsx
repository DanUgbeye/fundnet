import Link from "next/link";
import { Container } from "./container";
import { FundnetLogo } from "./logo";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className=" flex flex-col text-theme-navy-blue-dark ">
      <Container className="  ">
        <div className=" space-y-12 pt-16 ">
          <div className=" flex flex-wrap justify-between sm:grid w-full gap-x-3 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            <div className=" w-52 space-y-4 md:col-span-full lg:col-span-1 ">
              <Button variant={"link"} className=" py-0 " asChild>
                <Link href={"/"} className="">
                  <FundnetLogo className=" " />
                </Link>
              </Button>
            </div>

            <div className=" w-52 space-y-4 ">
              <h4 className=" font-semibold ">Quick Links</h4>

              <div className=" flex flex-col space-y-3 text-sm ">
                <Link
                  href={"/campaigns"}
                  className=" w-fit min-w-fit text-theme-navy-blue-light/80 underline decoration-transparent underline-offset-8 duration-500 hover:decoration-theme-navy-blue-light hover:duration-500 "
                >
                  Campaigns
                </Link>

                <Link
                  href={"/profile"}
                  className=" w-fit min-w-fit text-theme-navy-blue-light/80 underline decoration-transparent underline-offset-8 duration-500 hover:decoration-theme-navy-blue-light "
                >
                  Profile
                </Link>

                <Link
                  href={"/fund"}
                  className=" w-fit min-w-fit text-theme-navy-blue-light/80 underline decoration-transparent underline-offset-8 duration-500 hover:decoration-theme-navy-blue-light "
                >
                  Become a funder
                </Link>

                <Link
                  href={"/about-us"}
                  className=" w-fit min-w-fit text-theme-navy-blue-light/80 underline decoration-transparent underline-offset-8 duration-500 hover:decoration-theme-navy-blue-light "
                >
                  About us
                </Link>
              </div>
            </div>

            <div className=" w-52 space-y-4 ">
              <h4 className=" font-semibold ">Socials</h4>

              <div className=" flex flex-col space-y-3 text-sm ">
                <Link
                  href={"https://facebook.com"}
                  className=" w-fit min-w-fit text-theme-navy-blue-light/80 underline decoration-transparent underline-offset-8 duration-500 hover:decoration-theme-navy-blue-light "
                >
                  Facebook
                </Link>

                <Link
                  href={"/https://linkedin.com"}
                  className=" w-fit min-w-fit text-theme-navy-blue-light/80 underline decoration-transparent underline-offset-8 duration-500 hover:decoration-theme-navy-blue-light "
                >
                  Linkedin
                </Link>

                <Link
                  href={"/https://twitter.com"}
                  className=" w-fit min-w-fit text-theme-navy-blue-light/80 underline decoration-transparent underline-offset-8 duration-500 hover:decoration-theme-navy-blue-light "
                >
                  Twitter
                </Link>
              </div>
            </div>

            <div className=" w-52 space-y-4 ">
              <h4 className=" font-semibold ">Legal</h4>

              <div className=" flex flex-col space-y-3 text-sm ">
                <Link
                  href={"/terms-and-conditions"}
                  className=" w-fit min-w-fit text-theme-navy-blue-light/80 underline decoration-transparent underline-offset-8 duration-500 hover:decoration-theme-navy-blue-light "
                >
                  Terms and Conditions
                </Link>

                <Link
                  href={"/privacy-policy"}
                  className=" w-fit min-w-fit text-theme-navy-blue-light/80 underline decoration-transparent underline-offset-8 duration-500 hover:decoration-theme-navy-blue-light "
                >
                  Privacy Policy
                </Link>

                <Link
                  href={"/refund-policy"}
                  className=" w-fit min-w-fit text-theme-navy-blue-light/80 underline decoration-transparent underline-offset-8 duration-500 hover:decoration-theme-navy-blue-light "
                >
                  Refund Policy
                </Link>
              </div>
            </div>
          </div>

          <div className=" flex flex-wrap justify-between gap-x-16 gap-y-2 border-b border-b-gray-500 py-2 text-xs ">
            <div className="  ">contact@auroraloreli.com</div>

            <div className=" flex w-fit flex-wrap justify-start gap-x-2 ">
              <span className="  ">FUNDNet is a YOUreka Technology</span>
              <span className="  ">By Aurora Loreli Limited (A2L)</span>
            </div>
          </div>
        </div>
      </Container>

      <Container className=" w-full flex-row items-center justify-center gap-x-2 py-4 text-center text-sm ">
        <span className=" ">&copy; 2023</span>{" "}
        <span className=" font-semibold text-theme-green ">Unical Fundnet</span>
      </Container>
    </footer>
  );
}
