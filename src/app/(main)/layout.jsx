import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <main className="max-w-6xl mx-auto">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
