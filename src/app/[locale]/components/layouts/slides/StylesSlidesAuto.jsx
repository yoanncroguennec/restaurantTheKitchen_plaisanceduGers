"use client"

import { Box, styled } from "@mui/material";

export const RootSlidesAuto = styled(Box)(({ theme, left, right }) => ({
    margin: "0 auto",
    height: "780px",
    maxWidth: "1400px",
    padding: "64px 16px",
    position: "relative",
    width: "100%",
    [theme.breakpoints.down("sm")]: {},
}));

export const BoxImgSlide = styled(Box)(({ theme, left, right }) => ({
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "15px",
    height: "100%",
    transitionDuration: "0.5s",
    width: "100%",
}));

export const BoxChevronArrow = styled(Box)(({ theme, left, right }) => ({
    backgroundColor: "#000",
    borderRadius: "50%",
    color: "#FFF",
    cursor: "pointer",
    display: "none",
    fontSize: "30px",
    padding: "10px",
    position: "absolute",
    left: left,
    right: right,
    top: "50%",
}));

export const BoxSelectionPoints = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    padding: "20px 0",
}));
