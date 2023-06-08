import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='main'>{children}</div>
      <Footer />
    </>
  );
};
