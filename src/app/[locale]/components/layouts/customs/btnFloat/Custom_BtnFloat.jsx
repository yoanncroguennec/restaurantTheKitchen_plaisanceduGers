"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useMediaQuery, useTheme } from "@mui/material";
// ICONS
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineMail } from "react-icons/md";
// import { ImYoutube2 } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
// STYLES
import {
  RootBtnFloat,
  BtnMenu,
  StylesListOfOpenBtns,
} from "./StylesCustom_BtnFloat.jsx";

export default function Custom_BtnFloat() {
  const [first, setfirst] = useState(false);

  // Responsives
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  //
  const [navbar, setNavbar] = useState(false)

  function changeBgNavbar() {
      if (window.scrollY > 600) {
          setNavbar(true)
      } else {
          setNavbar(false)
      }
  }

  window.addEventListener("scroll", changeBgNavbar)
  return (
    <RootBtnFloat
      onMouseEnter={() => setfirst(true)}
      onMouseLeave={() => setfirst(false)}
    >
      <BtnMenu onClick={() => setfirst(!first)}>
        <GiHamburgerMenu color={navbar ? "#000" : "#FFF" } size={matches ? 20 : 40} />
      </BtnMenu>

      {/* <Tooltip title='Contactez-nous'> */}
      <Link href='mailto:associationmaryparki@gmail.com'>
        <StylesListOfOpenBtns
          borderColor_Hover='#000'
          first={first}
          navbar={navbar}
          left='80px'
          top='50px'
        >
          <MdOutlineMail color='#000' size={40} />
        </StylesListOfOpenBtns>
      </Link>
      {/* </Tooltip> */}

      {/* <Tooltip title='Contactez-nous'> */}
      {/* <Link href='tel:0781032954'>
        <StylesListOfOpenBtns
          borderColor_Hover='#008000'
          first={first}
          navbar={navbar}
          left='20px'
          top='-40px'
        >
          <MdLocalPhone color='#008000' size={45} />
        </StylesListOfOpenBtns>
      </Link> */}
      {/* </Tooltip> */}

      <Link href='https://www.facebook.com/profile.php?id=61565596861158'>
        <StylesListOfOpenBtns
          borderColor_Hover='#00F'
          first={first}
          navbar={navbar}
          left='20px'
          top='130px'
        >
          <FaFacebookF color='#00F' size={45} />
        </StylesListOfOpenBtns>
      </Link>
    </RootBtnFloat>
  );
}