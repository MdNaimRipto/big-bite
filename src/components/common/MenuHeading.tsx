import { colorConfig } from "@/configs/colorConfig";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import MenuIcon from "@mui/icons-material/CallMade";

const MenuHeading = ({
  title,
  path,
  titleBtn,
}: {
  title: string;
  path: string;
  titleBtn: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 pb-16">
      <div className="text-center md:text-start">
        <h2 className="text-black hover:text-secondary duration-300 text-3xl md:text-4xl  headingFont pb-7">
          {title}
        </h2>
        <p className="text-gray text-sm w-full md:w-2/3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
          numquam est, minus incidunt at.
        </p>
      </div>
      <Link href={path}>
        <Button
          className="commonButtonBg"
          sx={{
            py: "11px",
            px: {
              xs: "15px",
            },
            width: {
              xs: "200px",
            },
            color: colorConfig.white,
          }}
        >
          <MenuIcon className="me-2" /> {titleBtn}
        </Button>
      </Link>
    </div>
  );
};

export default MenuHeading;
