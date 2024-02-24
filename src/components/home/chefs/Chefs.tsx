import React from "react";
import chef1 from "@/assets/chefs/chef-1.png";
import chef2 from "@/assets/chefs/chef-2.png";
import chef3 from "@/assets/chefs/chef-3.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { colorConfig } from "@/configs/colorConfig";
import MenuHeading from "@/components/common/MenuHeading";

const Chefs = () => {
  const chefData = [
    {
      id: 1,
      img: chef1,
      name: "Vincent Sinclair",
      designation: "Master Chef",
      description:
        "Meet our extraordinary chef, a culinary virtuoso who transforms every dish into a masterpiece.",
      fbLink: "",
      linkedinLink: "",
      instagramLink: "",
    },
    {
      id: 2,
      img: chef2,
      name: "Camila Fernandez",
      designation: "Executive Chef",
      description:
        "Meet our extraordinary chef, a culinary virtuoso who transforms every dish into a masterpiece.",
      fbLink: "",
      linkedinLink: "",
      instagramLink: "",
    },
    {
      id: 3,
      img: chef3,
      name: "Harrison Grant",
      designation: "Executive Chef",
      description:
        "Meet our extraordinary chef, a culinary virtuoso who transforms every dish into a masterpiece.",
      fbLink: "",
      linkedinLink: "",
      instagramLink: "",
    },
  ];

  console.log(chef1);
  return (
    <div className="px-4 my-16 container">
      <MenuHeading title="Our Chefs" titleBtn="Meet Our Chefs" path="/" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {chefData.map(data => (
          <div
            key={data.id}
            className="group chefBg h-[450px] rounded-md relative overflow-hidden"
            style={{
              backgroundImage: `url(${data.img.src})`,
              animationDelay: "0.5s",
            }}
          >
            <div className="absolute bottom-0  w-full bg-[#1111119c] py-4 flex flex-col items-center justify-center group-hover:bottom-1/2  group-hover:translate-y-1/2 group-hover:bg-[#1110105c]  group-hover: text-white group-hover:h-full duration-500">
              <h2 className="text-2xl font-semibold titleFont">{data.name}</h2>
              <span className="text-primary text-lg">{data.designation}</span>
              <div className="h-0 opacity-0 group-hover:h-[120px] group-hover:opacity-100 duration-500">
                <p className="py-4 px-3 text-center">{data.description}</p>
                <div className="flex items-center justify-center gap-2">
                  <FacebookIcon
                    sx={{
                      cursor: "pointer",
                      transition: ".3s",
                      "&:hover": {
                        color: colorConfig.primary,
                      },
                    }}
                  />
                  <LinkedInIcon
                    sx={{
                      cursor: "pointer",
                      transition: ".3s",
                      "&:hover": {
                        color: colorConfig.primary,
                      },
                    }}
                  />
                  <InstagramIcon
                    sx={{
                      cursor: "pointer",
                      transition: ".3s",
                      "&:hover": {
                        color: colorConfig.primary,
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
