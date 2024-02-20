"use client";

import { fadeInFromTop } from "@/animation/fade-in.animation";
import { navLinks } from "@/application/data/nav-links";
import useNavbarStore from "@/application/store/navbar.store";
import { Container } from "@/components/container";
import { useGenerateNavLinks } from "@/hooks/use-generate-nav-links.hook";
import useWindowSize from "@/hooks/use-window-size.hook";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { HTMLAttributes, useEffect, useMemo } from "react";
import { FiMenu } from "react-icons/fi";
import { FundnetLogo } from "../logo";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { Sheet, SheetContent } from "../ui/sheet";
import { UserNavbarDropdown } from "../user-navbar-dropdown";

export interface NavbarProps
  extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  breakpoint?: number;
}

/** Navbar for Unical Fundnet */
export default function Navbar(props: NavbarProps) {
  const { breakpoint = 1024, className, ...rest } = props;
  const { toggle, isOpen } = useNavbarStore();
  const { width } = useWindowSize();
  const { generateForMobile, generateForDesktop } = useGenerateNavLinks();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const mobileLinks = useMemo(() => generateForMobile(navLinks), [navLinks]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const desktopLinks = useMemo(() => generateForDesktop(navLinks), [navLinks]);

  const isMobileBreakPoint = React.useMemo(() => {
    if (breakpoint >= width) return true;
    return false;
  }, [width, breakpoint]);

  // close nav on resize
  useEffect(() => {
    function handleResize() {
      isOpen && toggle(false);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <nav className={cn(" h-[6rem] w-full ", className)} {...rest}>
        <motion.div
          variants={fadeInFromTop}
          initial="hidden"
          animate="inView"
          className=" h-full "
        >
          <Container className=" h-full max-sm:px-4 ">
            <div className=" flex h-full items-center justify-between gap-x-4 ">
              <Button variant={"link"} className=" " asChild>
                <Link href={"/"} className="">
                  <FundnetLogo className=" " />
                </Link>
              </Button>

              <div className=" flex items-center gap-x-3 ">
                {!isMobileBreakPoint && (
                  <>
                    <div className=" flex space-x-6 ">
                      <Button
                        asChild
                        variant={"ghost"}
                        className=" rounded-none border-b-2 border-b-transparent px-0 duration-500 hover:border-b-theme-green hover:duration-500 "
                      >
                        <Link href={"#about"}>About</Link>
                      </Button>

                      <Button
                        asChild
                        variant={"ghost"}
                        className=" rounded-none border-b-2 border-b-transparent px-0 duration-500 hover:border-b-theme-green hover:duration-500 "
                      >
                        <Link href={"#discover"}>Discover</Link>
                      </Button>

                      <Button
                        asChild
                        variant={"ghost"}
                        className=" rounded-none border-b-2 border-b-transparent px-0 duration-500 hover:border-b-theme-green hover:duration-500 "
                      >
                        <Link href={"#faq"}>FAQ</Link>
                      </Button>
                    </div>
                  </>
                )}

                {isMobileBreakPoint && (
                  <Button
                    className=" text-theme-navy-blue-dark bg-transparent "
                    variant={"outline"}
                    size={"icon"}
                    onClick={() => toggle()}
                  >
                    <FiMenu size={20} />
                  </Button>
                )}
              </div>
            </div>
          </Container>
        </motion.div>
      </nav>

      {isMobileBreakPoint && (
        <Sheet open={isOpen} onOpenChange={(state) => toggle(state)} modal>
          <SheetContent
            side={"right"}
            className={cn(" flex w-full max-w-80 p-0 ")}
          >
            <ScrollArea className=" h-dvh w-full pr-2 pt-10 ">
              <div className=" h-full w-full px-2 ">{mobileLinks}</div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      )}
    </>
  );
}
