import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SideBar } from "../sideBar/SideBar";

export const UserLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='d-flex'>
        <SideBar /> <div className='main w-100 '>{children}</div>
      </div>
      <Footer />
    </>
  );
};
