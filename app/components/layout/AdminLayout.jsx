import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const AdminLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};