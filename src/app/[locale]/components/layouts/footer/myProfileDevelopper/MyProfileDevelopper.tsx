"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Typography } from "@mui/material";
// IMGS
import avatar3D_Yoann from "/public/assets/imgs/footer/avatar3D_Yoann.png";
import icon_Email1 from "/public/assets/icons/icon_Email1.png";
import icon_Phone1 from "/public/assets/icons/icon_Phone1.png";
// STYLES
import {
  RootMyProfileDevelopper,
  BoxInfos,
  TypoMyAchievements,
  BoxIcons_SocialNetwork,
  styles_icon_SocialNetwork,
  styles_avatar3D_Yoann,
} from "./StylesMyProfileDevelopper";

export default function MyProfileDevelopper() {
  const [hoverText, setHoverText] = useState(false);

  function handleHoverText_Enter() {
    setHoverText(true);
  }
  function handleHoverText_Leave() {
    setHoverText(false);
  }

  return (
    <RootMyProfileDevelopper>
      <BoxInfos>
        <Typography variant="h6">
          Site internet développé par
          <br />
          CROGUENNEC Yoann
        </Typography>
        <TypoMyAchievements
          onMouseEnter={handleHoverText_Enter}
          onMouseLeave={handleHoverText_Leave}
          sx={{
            fontWeight: hoverText ? "bold" : "normal",
            textShadow: hoverText
              ? "0px 0px 2px green, 0 0 10px darkgreen"
              : "",
          }}
          variant="h5"
        >
          Mes réalisations
        </TypoMyAchievements>
        <BoxIcons_SocialNetwork>
          <Image
            alt="icon_Email1"
            height={1000}
            src={icon_Email1}
            style={styles_icon_SocialNetwork}
            width={1000}
          />
          <Image
            alt="icon_Phone1"
            height={1000}
            src={icon_Phone1}
            style={styles_icon_SocialNetwork}
            width={1000}
          />
        </BoxIcons_SocialNetwork>
      </BoxInfos>
      <Image
        src={avatar3D_Yoann}
        alt="Avatar3D_Yoann"
        height={1000}
        style={styles_avatar3D_Yoann}
        width={1000}
      />
    </RootMyProfileDevelopper>
  );
}
