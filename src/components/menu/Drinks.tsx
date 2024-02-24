import React from "react";
import MenuHeading from "../common/MenuHeading";
import drink1 from "@/assets/menu/drinks/drink1.png";
import drink2 from "@/assets/menu/drinks/drink2.jpg";
import drink3 from "@/assets/menu/drinks/drink3.jpg";
import drink4 from "@/assets/menu/drinks/drink4.jpg";
import MenuCard from "@/components/common/MenuCard";

const Drinks = () => {
  const dishes = [
    {
      img: String(drink1.src),
      title: "Italian Pasta",
      price: "$55.00",
    },
    {
      img: String(drink2.src),
      title: "Fried Rice",
      price: "$50.00",
    },
    {
      img: String(drink3.src),
      title: "Green Salad",
      price: "$40.00",
    },
    {
      img: String(drink4.src),
      title: "French Pasta",
      price: "$45.00",
    },
  ];
  return (
    <div className="pt-16" id="drinks">
      <MenuHeading title="Popular Drinks" path="/" titleBtn="View All" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {dishes.map((dish, i) => (
          <MenuCard key={i} dish={dish} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Drinks;
