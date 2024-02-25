import Desserts from "@/components/menu/Desserts";
import Drinks from "@/components/menu/Drinks";
import MainDishes from "@/components/menu/MainDishes";
import StarterDishes from "@/components/menu/StarterDishes";
import MainLayout from "@/layouts/MainLayout";
import React, { ReactElement } from "react";

const Menu = () => {
  return (
    <div className="container px-4 my-24">
      <StarterDishes />
      <MainDishes />
      <Drinks />
      <Desserts />
    </div>
  );
};

export default Menu;

Menu.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
