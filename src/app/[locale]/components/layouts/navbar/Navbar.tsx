"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import LocalSwitcher from "./local-switcher";
// IMGS
import logo_TheKitchen_Restaurant from "/public/assets/logo/logo_TheKitchen_Restaurant.png";
import { Box } from "@mui/material";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false)

  function changeBgNavbar() {
      if (window.scrollY > 80) {
          setNavbar(true)
      } else {
          setNavbar(false)
      }
  }

  window.addEventListener("scroll", changeBgNavbar)

// TRANSLATES
  // const t = useTranslations("Navigation");
  const localActive = useLocale();

  //

  return (
    <Box
      sx={{
        alignItems: "center",
        background: navbar ? "#FFF" : "",
        color: "#FFF",
        display: "flex",
        flexWrap: "nowrap",
        height: "100px",
        justifyContent: "space-between",
        padding: "0 150px",
        position: "fixed",
        width: "100%",
      }}
    >
      <Link href="/">
        <Image
          alt="logo"
          height={400}
          src={logo_TheKitchen_Restaurant}
          style={{ height: "70px", width: "300px" }}
          width={400}
        />
      </Link>
      <Link href={`/${localActive}/photoGallery`}>Galerie Photo</Link>
      <LocalSwitcher />
    </Box>
  );
}
