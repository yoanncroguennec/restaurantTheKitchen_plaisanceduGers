"use client";

import { Box, styled, Typography } from "@mui/material";

export const Root = styled(Box)(({ theme }) => ({
  position: "relative",
  [theme.breakpoints.down("sm")]: {},
}));

export const BoxLinearGradientTop = styled(Box)(({ theme }) => ({
  backgroundImage: "linear-gradient(0deg, hsla(0, 0%, 100%, 0), #fff)",
  top: "0",
  height: "300px",
  position: "absolute",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    height: "100px",
  },
}));

export const BoxLinearGradientLeft = styled(Box)(({ theme }) => ({
  backgroundImage: "linear-gradient(270deg, hsla(0, 0%, 100%, 0), #fff)",
  height: "100%",
  left: "0",
  position: "absolute",
  width: "300px",
  [theme.breakpoints.down("sm")]: {
    width: "100px",
  },
}));

export const BoxLinearGradientRight = styled(Box)(({ theme }) => ({
  backgroundImage: "linear-gradient(90deg, hsla(0, 0%, 100%, 0), #fff)",
  height: "100%",
  position: "absolute",
  right: "0",
  width: "300px",
  [theme.breakpoints.down("sm")]: {
    width: "100px",
  },
}));

export const BoxLinearGradientBottom = styled(Box)(({ theme }) => ({
  backgroundImage: "linear-gradient(180deg, hsla(0, 0%, 100%, 0), #fff)",
  bottom: "0",
  height: "300px",
  position: "absolute",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    height: "100px",
  },
}));

export const BoxContactDetails = styled(Box)(({}) => ({
  backdropFilter: "blur(5px)",
  background: "rgba(255, 255, 255, 0.2)",
  border: "2px solid #000",
  borderRadius: "25px",
  height: "350px",
  padding: "25px",
  position: "absolute",
  right: "250px",
  top: "250px",
  width: "400px",
  zIndex: 99,
}));

export const TypoTitleContactDetails = styled(Typography)(({}) => ({
  color: "#FF69B4",
  fontFamily: "customText_1",
  fontWeight: "bold",
  letterSpacing: "8px",
  padding: "25px 0",
  textAlign: "center",
  WebkitTextFillColor: "transparent",
  WebkitTextStrokeWidth: "1px",
}));

export const BoxIconsSocialNetworks = styled(Box)(({}) => ({
  alignItems: "center",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",
}));

export const TypoBold = styled(Typography)(({}) => ({
  fontWeight: "bold",
}));

export const stylesIconFacebook = {
  cursor: "pointer",
  height: "80px",
  width: "80px",
};

export const stylesIconInstagram = {
  cursor: "pointer",
  height: "80px",
  width: "110px",
};
