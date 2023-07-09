"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Hero />

      <Sidebar />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
