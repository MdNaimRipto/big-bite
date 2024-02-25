import React from "react";
import MenuHeading from "../common/MenuHeading";
import starter1 from "@/assets/menu/starter/starter1.jpg";
import starter2 from "@/assets/menu/starter/starter2.png";
import starter3 from "@/assets/menu/starter/starter3.png";
import starter4 from "@/assets/menu/starter/starter4.jpg";
import MenuCard from "@/components/common/MenuCard";

const StarterDishes = () => {
  const dishes = [
    {
      img: String(starter1.src),
      title: "Italian Pasta",
      price: "$55.00",
    },
    {
      img: String(starter2.src),
      title: "Fried Rice",
      price: "$50.00",
    },
    {
      img: String(starter3.src),
      title: "Green Salad",
      price: "$40.00",
    },
    {
      img: String(starter4.src),
      title: "French Pasta",
      price: "$45.00",
    },
  ];
  return (
    <div className="pt-16" id="starterDishes">
      <MenuHeading title="Starter Dishes" path="/" titleBtn="View All" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {dishes.map((dish, i) => (
          <MenuCard key={i} dish={dish} index={i} />
        ))}
      </div>
    </div>
  );
};

export default StarterDishes;
