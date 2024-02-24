import { colorConfig } from "@/configs/colorConfig";
import { Button } from "@mui/material";
import React from "react";

const BannerContent = () => {
  return (
    <div className="flex flex-col gap-4 justify-start">
      <h6 className="font-semibold text-black">WELCOME TO OUR</h6>
      <h2 className="font-semibold text-black text-2xl md:text-3xl md:leading-[45px] lg:text-5xl leading-[40px] lg:leading-[70px] headingFont">
        Epicurean Restaurant & Enjoy Our Food
      </h2>
      <p className="font-medium text-black text-sm lg:text-base leading-6">
        {`You need to be sure there isn't anything embarrassing hidden in the
        middle of text. All the Lorem Ipsum Lorem Ipsum has been the industry's
        standard dummy text ever since the starting`}
      </p>
      <Button
        className="commonButtonBg"
        sx={{
          color: colorConfig.white,
          py: 1,
          width: 180,
        }}
      >
        Explore Our Menu
      </Button>
    </div>
  );
};

export default BannerContent;
