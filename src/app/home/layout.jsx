'use client';

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Sidebar />
      {children}
    </div>
  );
};

export default HomeLayout;
