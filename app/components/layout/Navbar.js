import React from "react";
import sutek from "../../assets/images/favicon.png";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="container">
      Navbar
      <Image src={sutek} alt="sutek" />
    </div>
  );
};    
