import Image from "next/image";
import React from "react";
import footerSubscribe from "@/assets/footer-images/footer-subscribe-bg.png";
import { Button } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";

const FooterSubscribeForm = () => {
  return (
    <div className="footerSubscribe p-3 lg:p-6 rounded-xl md:col-span-2 lg:col-span-2">
      <div className="relative">
        <Image className="w-full" src={footerSubscribe} alt="" />
        <div className="text-white ps-4 lg:ps-6 absolute subscribeContentCenter w-full">
          <span>Subscribe</span>
          <h2 className="py-1 lg:pt-2 lg:pb-4 text-3xl md:text-4xl headingFont">
            Our Newsletter
          </h2>
          <p>To Get Regular Update</p>
        </div>
      </div>

      {/* Subscribe Form */}

      <form className="pt-3 lg:pt-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        <input
          className="w-full lg:w-[70%] px-4 py-3 rounded-md border-0 focus:outline-none"
          type="text"
          placeholder="Enter your mail"
        />
        <Button
          className="commonButtonBg"
          sx={{
            width: {
              xs: "50%",
              sm: "40%",
              md: "35%",
              lg: "30%",
            },
            py: "11px",
            color: colorConfig.white,
          }}
        >
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default FooterSubscribeForm;
