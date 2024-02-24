import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
import { colorConfig } from "@/configs/colorConfig";
import logo from "@/assets/footer-logo.png"
import Image from "next/image";

const FooterBottom = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 items-center text-white pt-7 ">
      <div className="w-[50%]">
        <Image src={logo} alt="" />
      </div>
      <div className="flex items-center justify-center gap-4">
        <Link className="hover:text-primary duration-300" href={"/"}>
          Terms
        </Link>
        <Link className="hover:text-primary duration-300" href={"/"}>
          Privacy
        </Link>
        <Link className="hover:text-primary duration-300" href={"/"}>
          Cookies
        </Link>
      </div>
      <div className="flex items-center justify-end gap-2">
        <FacebookIcon
          sx={{
            cursor: "pointer",
            transition: ".3s",
            "&:hover": {
              color: colorConfig.primary,
            },
          }}
        />
        <LinkedInIcon
          sx={{
            cursor: "pointer",
            transition: ".3s",
            "&:hover": {
              color: colorConfig.primary,
            },
          }}
        />
        <InstagramIcon
          sx={{
            cursor: "pointer",
            transition: ".3s",
            "&:hover": {
              color: colorConfig.primary,
            },
          }}
        />
      </div>
    </div>
  );
};

export default FooterBottom;
