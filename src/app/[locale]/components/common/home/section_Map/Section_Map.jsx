"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Box, useTheme, useMediaQuery } from "@mui/material";
// IMGS
import mapColor from "/public/assets/imgs/home/map/mapColor.png";
// import mapGray from "/public/assets/imgs/map/map.png";
// import map_mobile from "/public/assets/imgs/map/map_mobile.png";
// import icon_Facebook1 from "/public/assets/icons/icon_Facebook1.png";
// import icon_instagram1 from "/public/assets/icons/icon_instagram1.png";
// STYLES
import {
  Root,
  BoxLinearGradientTop,
  BoxLinearGradientLeft,
  BoxLinearGradientRight,
  BoxLinearGradientBottom,
  TypoTitleContactDetails,
  TypoBold,
  BoxIconsSocialNetworks,
  BoxContactDetails,
  stylesIconFacebook,
  stylesIconInstagram,
} from "./StylesSection_Map";

export default function Section_Map() {
  const [darkMode] = useState(true);

  //////////////////// RESPONSIVES ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  // Styles
  const stylesIMG_Map = {
    borderRadius: "20px",
    height: matches ? "350px" : "900px",
    width: "100%",
  };

  return (
    <Root>
      <BoxLinearGradientTop />
      <BoxLinearGradientLeft />
      <BoxLinearGradientRight />
      {darkMode ? (
        <Box>
          <Image alt='mapGray' src={mapColor} style={stylesIMG_Map} />
          {matches ? null : (
            <BoxContactDetails>
              <TypoTitleContactDetails variant='h4'>
                Restaurant &quot;The Kitchen&quot;
              </TypoTitleContactDetails>
              <TypoBold variant='body1'>
                26 Rue de l'Adour, 32160 Plaisance
              </TypoBold>
              <TypoBold variant='body1'>07 80 29 36 33</TypoBold>
              <TypoBold variant='body1'>
                rosbifs.chezchristine@gmail.com
              </TypoBold>
              {/* <BoxIconsSocialNetworks>
                <Image
                  alt='icon_Facebook1'
                  src={icon_Facebook1}
                  style={stylesIconFacebook}
                />
                <Image
                  alt='icon_Facebook1'
                  src={icon_instagram1}
                  style={stylesIconInstagram}
                />
              </BoxIconsSocialNetworks> */}
            </BoxContactDetails>
          )}
        </Box>
      ) : (
        <Box>
          <Image alt='mapColor' src={mapColor} style={stylesIMG_Map} />
          <Box>hnhu</Box>
        </Box>
      )}
      <BoxLinearGradientBottom />
    </Root>
  );
}
