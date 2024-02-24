import { colorConfig } from "@/configs/colorConfig";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

interface IDish {
  img: string;
  title: string;
  price: string;
}

const MenuCard = ({ dish, index }: { dish: IDish; index: number }) => {
  return (
    <div className="group">
      <div className="h-full w-full p-10 border border-white group-hover:border-primary rounded duration-700">
        <div className="mb-5 w-32 h-32 mx-auto">
          <Image
            src={dish.img}
            alt={`Dish-Image0${index}`}
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
          <p className="text-2xl text-black mb-3 font-semibold">{dish.price}</p>
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
  );
};

export default MenuCard;
