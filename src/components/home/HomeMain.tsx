import React from "react";
import Banner from "./banner/Banner";
import MenuCategory from "./menuCategory/MenuCategory";
import Reserve from "./reserve/Reserve";
import About from "./about/About";
import OurMenu from "./ourSpecialMenu/OurSpecialMenu";
import Chefs from "./chefs/Chefs";

const HomeMain = () => {
  return (
    <div>
      <Banner />
      <About />
      <MenuCategory />
      <OurMenu />
      <Reserve />
      <Chefs />
    </div>
  );
};

export default HomeMain;
