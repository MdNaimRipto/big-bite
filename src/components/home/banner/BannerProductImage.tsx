import Image from "next/image";
import React, { useEffect, useState } from "react";
import bg1 from "@/assets/banner/bg1.png";
import bg2 from "@/assets/banner/bg2.png";
import bg3 from "@/assets/banner/bg3.jpg";

const BannerProductImage = () => {
  const bannerItems = [
    {
      image: bg1.src,
    },
    {
      image: bg2.src,
    },
    {
      image: bg3.src,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextSlide = (currentSlide + 1) % bannerItems.length;
      setCurrentSlide(nextSlide);
    }, 4500);

    return () => {
      clearTimeout(timer);
    };
  }, [currentSlide, bannerItems.length]);

  // const forward = () => {
  //   setCurrentSlide(prevSlide => (prevSlide + 1) % bannerItems.length);
  // };

  return (
    <div className="w-full lg:w-10/12 mb-6 md:mb-0 relative h-[300px] md:h-[380px] lg:h-[500px] overflow-hidden">
      {bannerItems.map((item, i) => (
        <Image
          key={i}
          src={item.image}
          alt={`Banner Item Image-${i}`}
          width={400}
          height={400}
          className="w-full h-full object-cover float absolute top-0"
          style={{
            opacity: currentSlide === i ? 1 : 0,
            transition: ".8s",
          }}
        />
      ))}
    </div>
  );
};

export default BannerProductImage;
