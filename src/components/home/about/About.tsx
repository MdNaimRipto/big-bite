import React from "react";
import AboutContent from "./AboutContent";
import Image from "next/image";
import aboutImg from "@/assets/about/volkan-vardar-1H30uRC1plc-unsplash.jpg";
import sideLogo from "@/assets/about/side-logo.png";

const About = () => {
  return (
    <div className="pb-16 px-4 lg:px-8 container">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-auto">
        <div className="relative w-full h-full hidden lg:block">
          <Image
            className="w-[90%] h-full object-cover object-bottom aboutImgAnimation"
            src={aboutImg}
            alt=""
          />
          <Image
            src={sideLogo}
            alt="Side-Logo"
            className="absolute right-0 bottom-0"
          />
        </div>
        <AboutContent />
      </div>
    </div>
  );
};

export default About;
