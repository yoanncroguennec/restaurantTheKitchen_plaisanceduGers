"use client";

import { useEffect } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
// LAYOUTS
import { Navbar, ProgressBar, CustomCursor, Footer } from "..";

export default function Container_App({ children }) {
  //////////////////// RESPONSIVES ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    // define a custom handler function
    // for the contextmenu event
    const handleContextMenu = (e) => {
      // prevent the right-click menu from appearing
      e.preventDefault();
      alert("Oups, vous avez cliqué sur le menu contextuel");
    };

    // attach the event listener to
    // the document object
    document.addEventListener("contextmenu", handleContextMenu);

    // clean up the event listener when
    // the component unmounts
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <Box>
      {matches ? null : (
        <>
          <Navbar />
          <CustomCursor />
          {/* <Custom_BtnFloat /> */}
        </>
      )}
      {/* {matches ? null : (
        <>
          <Navbar />
          <CustomCursor />
          <Custom_BtnFloat />
        </>
      )}
      <ProgressBar />
      {children}
      <Footer /> */}
      <ProgressBar />
      {children}
      <Footer />
    </Box>
  );
}
