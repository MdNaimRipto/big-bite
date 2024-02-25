import React from "react";
import MenuHeading from "../common/MenuHeading";
import dessert1 from "@/assets/menu/desserts/desserts1.jpg";
import dessert2 from "@/assets/menu/desserts/desserts2.jpg";
import dessert3 from "@/assets/menu/desserts/desserts3.jpg";
import dessert4 from "@/assets/menu/desserts/desserts4.jpg";
import MenuCard from "@/components/common/MenuCard";

const Desserts = () => {
  const dishes = [
    {
      img: String(dessert1.src),
      title: "Italian Pasta",
      price: "$55.00",
    },
    {
      img: String(dessert2.src),
      title: "Fried Rice",
      price: "$50.00",
    },
    {
      img: String(dessert3.src),
      title: "Green Salad",
      price: "$40.00",
    },
    {
      img: String(dessert4.src),
      title: "French Pasta",
      price: "$45.00",
    },
  ];
  return (
    <div className="pt-16" id="desserts">
      <MenuHeading title="Best Desserts" path="/" titleBtn="View All" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {dishes.map((dish, i) => (
          <MenuCard key={i} dish={dish} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Desserts;
