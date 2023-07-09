"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Hero />

      <Sidebar />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
