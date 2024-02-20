export type BaseLink = { title: string; disabled?: boolean };
export type NavLink = BaseLink & { href: string };

export type NavLinkWithChildren<ChildrenType> = BaseLink & {
  children: ChildrenType[];
};

export type ThirdDegreeMaxLink =
  | NavLink
  | NavLinkWithChildren<NavLink | NavLinkWithChildren<NavLink>>;

export const navLinks: ThirdDegreeMaxLink[] = [
  {
    title: "Campaigns",
    children: [
      {
        title: "Principal Campaigns",
        href: "",
      },
      {
        title: "Essenial Campaigns",
        href: "",
      },
      {
        title: "Corporate Campaigns",
        href: "",
      },
      {
        title: "Share",
        children: [
          {
            title: "Email",
            href: "",
          },
          {
            title: "Messages",
            href: "",
          },
          {
            title: "Notes",
            href: "",
          },
        ],
      },
    ],
  },
  {
    title: "Level 1",
    children: [
      {
        title: "Level 2",
        href: "/",
      },
      {
        title: "Level 2",
        href: "/",
      },
      {
        title: "Level 2",
        children: [
          {
            title: "Level 3",
            href: "/",
          },
          {
            title: "Level 3",
            href: "/",
          },
        ],
      },
    ],
  },
];
