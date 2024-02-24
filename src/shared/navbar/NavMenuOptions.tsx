import Link from "next/link";
import React from "react";

const NavMenuOptions = ({
  isNavOpen,
  setIsNavOpen,
}: {
  isNavOpen: boolean;
  setIsNavOpen: any;
}) => {
  const options = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/",
      title: "Pages",
    },
    {
      path: "/menu",
      title: "Menu",
    },
    {
      path: "/",
      title: "Blog",
    },
    {
      path: "/",
      title: "Shop",
    },
    {
      path: "/",
      title: "Contact",
    },
  ];
  return (
    <>
      <ul
        className={`w-full flex flex-col bg-white lg:bg-[#ffffff00] lg:flex-row items-center justify-start lg:justify-evenly h-screen lg:h-[80px] absolute lg:static ${
          isNavOpen ? "left-0" : "-left-[1000px]"
        } duration-500`}
      >
        {options.map((o, i) => (
          <li
            key={i}
            className="font-medium text-start lg:text-center text-black hover:text-primary duration-300 h-[60px] lg:h-[80px] leading-[60px] lg:leading-[80px] px-3 cursor-pointer w-full pl-8 md:pl-16 lg:pl-0"
          >
            <Link
              className="h-[60px] lg:h-[80px] leading-[60px] lg:leading-[80px] block w-full font-serif"
              href={o.path}
              onClick={() => setIsNavOpen(false)}
            >
              {o.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenuOptions;
