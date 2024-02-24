import React from "react";
import MenuCategoryContent from "./MenuCategoryContent";
import starters from "../../../assets/like-today/starters.png";
import mainDishes from "../../../assets/like-today/main-dishes.png";
import desserts from "../../../assets/like-today/desserts.png";
import drinks from "../../../assets/like-today/drinks.png";
import MenuHeading from "@/components/common/MenuHeading";

const MenuCategory = () => {
  const menuCategoryContent = [
    {
      id: 1,
      title: "Starters",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      icon: starters,
    },
    {
      id: 2,
      title: "Main dishes",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      icon: mainDishes,
    },
    {
      id: 3,
      title: "Drinks",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      icon: drinks,
    },
    {
      id: 4,
      title: "Desserts",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      icon: desserts,
    },
  ];
  return (
    <div className="px-4 mb-16">
      <div className="container">
        <MenuHeading
          title="What Do You Like Today?"
          path="/menu"
          titleBtn="View full menu"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          {menuCategoryContent.map(data => (
            <MenuCategoryContent key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
