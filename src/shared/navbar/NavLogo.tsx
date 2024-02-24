import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/nav-logo.png"

const NavLogo = () => {
  return (
    <Link href="/" className="w-1/2 md:w-[30%] lg:w-[15%]">
      <Image
        src={logo.src}
        alt="Navbar Logo"
        width={400}
        height={400}
      />
    </Link>
  );
};

export default NavLogo;
