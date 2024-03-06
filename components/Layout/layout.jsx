import React, { useCallback, useState } from "react";
import { Footer, Navbar } from "..";
import { Fade } from "react-awesome-reveal";
import BackDrop from "../Navbar/backDrop";

export default function Layout({ children }) {
  const [navigation, setNavigation] = useState(false);

  const handleToggle = useCallback(() => {
    setNavigation((prev) => !prev);
  }, []);
  return (
    <>
      <Fade cascade>
        <div className="w-full min-h-screen flex flex-col overflow-hidden bg-rose-800">
          <Navbar state={navigation} handleToggle={handleToggle} />
          <main className="">{children}</main>
          <Footer />
        </div>
      </Fade>
      {/* {navigation ? <BackDrop onClick={handleToggle} /> : null} */}
    </>
  );
}
