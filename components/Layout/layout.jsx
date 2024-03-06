import React, { useCallback, useState } from "react";
import { Footer, Navbar } from "..";
import { Fade } from "react-awesome-reveal";
import BackDrop from "../Navbar/backDrop";

export default function Layout({ children }) {

  return (
    <>
      <Fade cascade>
        <div className="w-full min-h-screen flex flex-col overflow-hidden">
          <Navbar  />
          <main className="">{children}</main>
          <Footer />
        </div>
      </Fade>
    </>
  );
}
