import { ThirdDegreeMaxLink } from "@/application/data/nav-links";
import Mapper from "@/components/mapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

function generateDesktopNavLinks(links: ThirdDegreeMaxLink[]) {
  return (
    <Menubar className="  ">
      <Mapper
        id="navlinks-level-1"
        list={links}
        component={(props) => {
          const { item: link, index } = props;

          if ("href" in link) {
            return (
              <MenubarItem>
                <Link href={link.href}>{link.title}</Link>
              </MenubarItem>
            );
          }

          return (
            <MenubarMenu>
              <MenubarTrigger className=" cursor-pointer rounded-[4px] hover:bg-white/10 focus:bg-theme-navy-blue-light focus:text-white focus-visible:bg-white/10 data-[state=open]:bg-white/10 ">
                {link.title}
              </MenubarTrigger>

              {link.children.length > 0 && (
                <MenubarContent>
                  <Mapper
                    id={"navlinks-level-2"}
                    list={link.children}
                    component={(props) => {
                      const { item: level2Link } = props;

                      if ("href" in level2Link) {
                        return (
                          <MenubarItem>
                            <Link href={level2Link.href}>
                              {level2Link.title}
                            </Link>
                          </MenubarItem>
                        );
                      }

                      return (
                        <MenubarSub>
                          <MenubarSubTrigger className="  ">
                            {level2Link.title}
                          </MenubarSubTrigger>

                          {level2Link.children.length > 0 && (
                            <MenubarSubContent className=" flex flex-col ">
                              <Mapper
                                id={"navlinks-level-3"}
                                list={level2Link.children}
                                component={(props) => {
                                  const { item: level3Link } = props;

                                  return (
                                    <MenubarItem>
                                      <Link href={level3Link.href}>
                                        {level3Link.title}
                                      </Link>
                                    </MenubarItem>
                                  );
                                }}
                              />
                            </MenubarSubContent>
                          )}
                        </MenubarSub>
                      );
                    }}
                  />
                </MenubarContent>
              )}
            </MenubarMenu>
          );
        }}
      />
    </Menubar>
  );
}

const mobileLinkClassNames = cn(
  buttonVariants({
    variant: "ghost",
  }),
  " justify-start "
);

function generateMobileNavLinks(links: ThirdDegreeMaxLink[]) {
  return (
    <Accordion type="single" collapsible className=" w-full ">
      <div className=" w-full space-y-6 ">
        <Mapper
          id="navlinks-level-1"
          list={links}
          component={(props) => {
            const { item: link } = props;

            if ("href" in link) {
              return (
                <Link href={link.href} className={cn(mobileLinkClassNames)}>
                  {link.title}
                </Link>
              );
            }

            return (
              <div className=" w-full pb-2 ">
                <h4
                  className={cn(
                    mobileLinkClassNames,
                    " pointer-events-none text-xs font-bold text-neutral-400 hover:bg-transparent "
                  )}
                >
                  {link.title}
                </h4>

                {link.children.length > 0 && (
                  <div className=" flex w-full flex-col space-y-1 ">
                    <Mapper
                      id={"navlinks-level-2"}
                      list={link.children}
                      component={(props) => {
                        const { item: level2Link } = props;

                        if ("href" in level2Link) {
                          return (
                            <Link
                              href={level2Link.href}
                              className={cn(mobileLinkClassNames)}
                            >
                              {level2Link.title}
                            </Link>
                          );
                        }

                        return (
                          <AccordionItem
                            value={level2Link.title}
                            className=" border-0 "
                          >
                            <AccordionTrigger
                              className={cn(
                                mobileLinkClassNames,
                                " justify-between hover:no-underline"
                              )}
                            >
                              {level2Link.title}
                            </AccordionTrigger>

                            {level2Link.children.length > 0 && (
                              <AccordionContent className=" flex w-full flex-col pl-3 ">
                                <Mapper
                                  id={"navlinks-level-3"}
                                  list={level2Link.children}
                                  component={(props) => {
                                    const { item: level3Link } = props;

                                    return (
                                      <Link
                                        href={level3Link.href}
                                        className={cn(
                                          mobileLinkClassNames,
                                          " text-neutral-500 "
                                        )}
                                      >
                                        {level3Link.title}
                                      </Link>
                                    );
                                  }}
                                />
                              </AccordionContent>
                            )}
                          </AccordionItem>
                        );
                      }}
                    />
                  </div>
                )}
              </div>
            );
          }}
        />
      </div>
    </Accordion>
  );
}

export function useGenerateNavLinks() {
  return {
    generateForDesktop: generateDesktopNavLinks,
    generateForMobile: generateMobileNavLinks,
  };
}
