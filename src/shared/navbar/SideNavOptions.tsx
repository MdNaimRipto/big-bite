import React from "react";
import CartIcon from "@mui/icons-material/LocalMallOutlined";
import { colorConfig } from "@/configs/colorConfig";
import { IconButton } from "@mui/material";
import OptionsIcon from "@mui/icons-material/MoreVertOutlined";
import OpenMenuIcon from "@mui/icons-material/MenuOutlined";
import CloseMenuIcon from "@mui/icons-material/CloseOutlined";

const SideNavOptions = ({
  isNavOpen,
  setIsNavOpen,
}: {
  isNavOpen: boolean;
  setIsNavOpen: any;
}) => {
  const commonSx = {
    color: colorConfig.black,
    cursor: "pointer",
    transition: "0.3s",
    "&:hover": {
      color: colorConfig.primary,
    },
  };

  return (
    <div className="w-[35%] md:w-1/5 lg:w-[10%] flex items-center justify-center gap-1">
      <IconButton>
        <CartIcon sx={commonSx} />
      </IconButton>
      <div className="block lg:hidden">
        {!isNavOpen ? (
          <IconButton
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
          >
            <OpenMenuIcon sx={commonSx} />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
          >
            <CloseMenuIcon sx={commonSx} />
          </IconButton>
        )}
      </div>
      <IconButton>
        <OptionsIcon sx={commonSx} />
      </IconButton>
    </div>
  );
};

export default SideNavOptions;
