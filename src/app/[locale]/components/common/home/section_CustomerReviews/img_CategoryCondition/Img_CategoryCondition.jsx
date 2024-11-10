"use client"

import React, { useState } from 'react'
import Image from "next/image";
// IMGS
import couple_1 from "/public/assets/icons/couple_1.png";
import couple_2 from "/public/assets/icons/couple_2.png";
import man_1 from "/public/assets/icons/man_1.png";
import woman_1 from "/public/assets/icons/woman_1.png";
import { useMediaQuery, useTheme } from '@mui/material';

const stylesImgDesktop = {
  height: "300px",
  width: "300px",
};

const stylesImgMobile = {
  height: "120px",
  width: "120px",
};

export default function Img_CategoryCondition({ category}) {
  //////////////////// RESPONSIVES ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  // 
  if (category === "woman") {
    return (
      <Image
        alt='woman_1'
        src={woman_1}
        style={matches ? stylesImgMobile : stylesImgDesktop}
      />
    );
  } else if (category === "man") {
    return (
      <Image
        alt='man_1'
        src={man_1}
        style={matches ? stylesImgMobile : stylesImgDesktop}
      />
    );
  } else if (category === "couple") {
    return (
      <Image
        alt='couple_1'
        src={couple_1}
        style={matches ? stylesImgMobile : stylesImgDesktop}
      />
    );
  }
}
