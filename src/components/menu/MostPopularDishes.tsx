import React from "react";
import MenuHeading from "../common/MenuHeading";
import dish1 from "@/assets/menu/food01.jpg";
import dish2 from "@/assets/menu/food02.jpg";
import dish3 from "@/assets/menu/food03.jpg";
import dish4 from "@/assets/menu/food04.jpg";
import MenuCard from "@/components/common/MenuCard";

const MostPopularDishes = () => {
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
    <div className="pt-16">
      <MenuHeading title="Most Popular Dishes" path="/" titleBtn="View All" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {dishes.map((dish, i) => (
          <MenuCard key={i} dish={dish} index={i} />
        ))}
      </div>
    </div>
  );
};

export default MostPopularDishes;
