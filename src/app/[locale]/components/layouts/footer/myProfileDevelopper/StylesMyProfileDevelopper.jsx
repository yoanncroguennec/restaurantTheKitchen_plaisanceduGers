"use client";

import { Box, styled, Typography } from "@mui/material";

export const RootMyProfileDevelopper = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {},
}));

export const BoxInfos = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column"
}));

export const TypoMyAchievements = styled(Typography)(({ theme, hoverText }) => ({
  cursor: "pointer",
  textAlign: "center",
}));

export const BoxIcons_SocialNetwork = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",
}));

export const styles_icon_SocialNetwork = {
  cursor: "pointer",
  height: "70px",
  padding: "0 2px",
  width: "70px"
}

export const styles_avatar3D_Yoann = {
  height: "250px",
  width: "240px"
}
