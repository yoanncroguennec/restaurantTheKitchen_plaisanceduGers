"use client"

import React, { useState } from 'react'
import Image from "next/image";
// IMGS
import mapColor from "/public/assets/imgs/mapColor.png";
import mapGray from "/public/assets/imgs/mapGray.png";
// STYLES
import { Root, BoxLinearGradientTop, BoxLinearGradientLeft, BoxLinearGradientRight, BoxLinearGradientBottom, stylesIMG_Map } from "./StylesMap";

export default function Map() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <Root>
      <BoxLinearGradientTop />
      <BoxLinearGradientLeft />
      <BoxLinearGradientRight />
      {darkMode
        ? <Image alt="mapGray" src={mapGray} style={stylesIMG_Map} />
        : <Image alt="mapColor" src={mapColor} style={stylesIMG_Map} />
      }
      <BoxLinearGradientBottom />
    </Root>
  )
}
