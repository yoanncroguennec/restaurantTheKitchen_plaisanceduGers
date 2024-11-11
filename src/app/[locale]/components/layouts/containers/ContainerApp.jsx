"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
// LAYOUTS
import { Navbar, ProgressBar, CustomCursor, Footer } from "..";

export default function Container_App({ children }) {
  const [t, i18n] = useTranslation("global");
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

  function handleChangeLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <Box>
      {t("header.message")} // {t("presentationOfTheEstablishment.finalWord")}
      <Button onClick={() => handleChangeLanguage("en")} variant='outlined'>
        EN
      </Button>
      <Button onClick={() => handleChangeLanguage("es")} variant='outlined'>
        FR
      </Button>
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
      <Box sx={{ paddingTop: "100px", minHeight: "100vh" }}>{children}</Box>
      <Footer />
    </Box>
  );
}
