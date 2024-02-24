import React from "react";
import FooterBottom from "./FooterBottom";
import FooterSubscribeForm from "./FooterSubscribeForm";
import FooterContents from "./FooterContents";

const Footer = () => {
  return (
    <div className="footerBg">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 lg:gap-2 pb-16 copyrightWrap justify-center">
          <FooterContents />
          <FooterSubscribeForm />
        </div>
        <FooterBottom />
      </div>
    </div>
  );
};

export default Footer;
