"use client";

import { Box, styled, Typography } from "@mui/material";

export const RootPhotoGallery = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {},
}));

export const TypoTitlePage = styled(Typography)(({ theme }) => ({
  color: "#F0F",
  fontWeight: "bold",
  margin: "40px 0",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {},
}));

// MODAL OPEN PHOTO
export const BoxModalImg = styled(Box)(({ modelImg }) => ({
  alignItems: "center",
  background: "rgba(0, 0, 0, 0.7)",
  cursor: "pointer",
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  left: 0,
  opacity: modelImg ? 1 : 0,
  overflow: "hidden",
  position: "fixed",
  top: 0,
  transform: modelImg ? "scale(1)" : "scale(0)",
  transition: "opacity 0.4s ease, visibility 0.4s ease, transform 0.5s ease-in-out",
  visibility: modelImg ? "visible" : "hidden",
  width: "100%",
  zIndex: 9999,
}));

export const StylesImgOfModal = {
  borderRadius: "40px",
  boxShadow:
    "rgba(255, 255, 255, 0.4) 5px 5px, rgba(255, 255, 255, 0.3) 10px 10px, rgba(255, 255, 255, 0.2) 15px 15px, rgba(255, 255, 255, 0.1) 20px 20px, rgba(255, 255, 255, 0.05) 25px 25px",
  boxSizing: "border-box",
  display: "block",
  height: "auto",
  lineHeight: 0,
  margin: "0 auto",
  maxHeight: "100%",
  maxWidth: "100%",
  padding: "20px 0 20px",
  width: "auto",
};


// LIST PHOTOS GALERY
export const BoxGallery = styled(Box)(({ theme }) => ({
  columnCount: 4,
  columnWidth: "50%",
  MozColumnCount: 4,
  MozColumnWidth: "50%",
  WebkitColumnCount: 4,
  WebkitColumnWidth: "50%",
  // sm, small: 600px
  [theme.breakpoints.down("sm")]: {
    columnCount: 1,
    columnWidth: "100%",
    MozColumnCount: 1,
    MozColumnWidth: "100%",
    WebkitColumnCount: 1,
    WebkitColumnWidth: "100%",
  },
  // md, medium: 900px
  [theme.breakpoints.down("md")]: {
    columnCount: 2,
    MozColumnCount: 2,
    WebkitColumnCount: 2,
  },
}));

export const StylesImg = styled(Box)(({ }) => ({
  cursor: "pointer",
  marginBottom: "15px",
  transition: "all 350ms ease",
  WebkitTransition: "all 350ms ease",
  "&:hover": {
    opacity: "0.8",
    transform: "scale(1.1)",
  },
}));


export const stylesIconClose = {
  cursor: "pointer",
  padding: "5px",
  position: "fixed",
  right: "10px",
  top: "10px",
};