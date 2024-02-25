import MenuHeading from "@/components/common/MenuHeading";
import React from "react";
import dish1 from "@/assets/menu/food01.jpg";
import dish2 from "@/assets/menu/food02.jpg";
import dish3 from "@/assets/menu/food03.jpg";
import dish4 from "@/assets/menu/food04.jpg";
import MenuCard from "@/components/common/MenuCard";
import Image from "next/image";
import { Button } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";

const OurSpecialMenu = () => {
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
    <div className="container px-4 mb-16">
      <MenuHeading
        title="Our Special Menu"
        path="/menu"
        titleBtn="View full menu"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {dishes.map((dish, i) => (
          <div className="group" key={i}>
            <div className="h-full w-full p-10 border border-white group-hover:border-primary rounded duration-700">
              <div className="mb-5 w-32 h-32 mx-auto">
                <Image
                  src={dish.img}
                  alt={`Dish-Image0${i}`}
                  className="group-hover:rotate-[360deg] duration-[5s]"
                  width={400}
                  height={400}
                />
              </div>
              <div className="text-center">
                <h2 className="text-2xl titleFont mb-3 text-black font-semibold">
                  {dish.title}
                </h2>
                <p className="text-gray mb-3">
                  Lorem ipsum dolor sit amet consectetur adipiscing
                </p>
                <p className="text-2xl text-black mb-3 font-semibold">
                  {dish.price}
                </p>
                <Button
                  className="commonButtonBg"
                  sx={{
                    color: colorConfig.white,
                    py: 1,
                    px: 2,
                  }}
                >
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSpecialMenu;
