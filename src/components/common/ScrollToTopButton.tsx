import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {visible && (
        <button
          onClick={handleClick}
          className="p-3 bg-secondary text-white hover:bg-primary rounded-full duration-500 z-50"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
          }}
        >
          <ArrowUpwardIcon />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
