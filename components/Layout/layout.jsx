import React from "react";
import { Footer, Navbar } from "..";
import { Fade } from "react-awesome-reveal";

export default function Layout({ children }) {
  return (
    <Fade cascade>
      <div className="w-full h-auto flex flex-col">
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </div>
    </Fade>
  );
}