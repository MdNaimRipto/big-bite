import React from "react";
import BannerContent from "./BannerContent";
import BannerProductImage from "./BannerProductImage";

const Banner = () => {
  return (
    <div className="container px-4 flex flex-col-reverse md:flex-row items-center gap-4 mt-4 mb-16">
      <BannerContent />
      <BannerProductImage />
    </div>
  );
};

export default Banner;
