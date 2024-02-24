import React, { useState } from "react";
import NavMenuOptions from "./NavMenuOptions";
import SideNavOptions from "./SideNavOptions";
import NavLogo from "./NavLogo";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="fixed top-0 z-50 w-full bg-white">
      <div className="flex items-center justify-between gap-4 h-[80px] border-b border-b-border w-full container px-4 bg-white relative">
        <NavLogo />
        <div className="hidden lg:block w-full lg:w-1/2 h-full">
          <NavMenuOptions isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </div>
        <SideNavOptions isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      </div>
      <div className="block lg:hidden">
        <NavMenuOptions isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      </div>
    </div>
  );
};

export default Navbar;
