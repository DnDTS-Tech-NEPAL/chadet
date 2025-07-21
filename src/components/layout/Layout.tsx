"use client";

import { LayoutProps } from "@/types/components/layout";
import { Topbar } from "./topbar";
import { NavBar } from "./navbar";
import { Footer } from "./footer";


export const Layout = ({ children}: LayoutProps) => {
  // set config data fetched from the server to the react query

  return (
    <>
      <Topbar />

      <NavBar />

      {children}

      <Footer />
    </>
  );
};
