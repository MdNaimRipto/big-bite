import React from "react";
import MenuHeading from "../common/MenuHeading";
import dish1 from "@/assets/menu/main-dish/dish1.jpg";
import dish2 from "@/assets/menu/main-dish/dish2.jpg";
import dish3 from "@/assets/menu/main-dish/dish3.jpg";
import dish4 from "@/assets/menu/main-dish/dish4.jpg";
import MenuCard from "@/components/common/MenuCard";

const MainDishes = () => {
  const dishes = [
    {
      img: String(dish1.src),
      title: "Italian Pasta",
      price: "$55.00",
    },
    {
      img: String(dish2.src),
      title: "Fried Rice",
      price: "$50.00",
    },
    {
      img: String(dish3.src),
      title: "Green Salad",
      price: "$40.00",
    },
    {
      img: String(dish4.src),
      title: "French Pasta",
      price: "$45.00",
    },
  ];
  return (
    <div className="pt-16" id="mainDishes">
      <MenuHeading title="Main Dishes" path="/" titleBtn="View All" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {dishes.map((dish, i) => (
          <MenuCard key={i} dish={dish} index={i} />
        ))}
      </div>
    </div>
  );
};

export default MainDishes;
