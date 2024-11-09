"use client"

import { Box, styled } from "@mui/material";

export const Root = styled(Box)(({ theme }) => ({
    position: "relative",
    [theme.breakpoints.down("sm")]: {},
}));

export const BoxLinearGradientTop = styled(Box)(({ theme }) => ({
    backgroundImage: "linear-gradient(0deg, hsla(0, 0%, 100%, 0), #fff)",
    top: "0",
    height: "300px",
    position: "absolute",
    width: "100%"
}));

export const BoxLinearGradientLeft = styled(Box)(({ theme }) => ({
    backgroundImage: "linear-gradient(270deg, hsla(0, 0%, 100%, 0), #fff)",
    height: "100%",
    left: "0",
    position: "absolute",
    width: "300px"
}));

export const BoxLinearGradientRight = styled(Box)(({ theme }) => ({
    backgroundImage: "linear-gradient(90deg, hsla(0, 0%, 100%, 0), #fff)",
    height: "100%",
    position: "absolute",
    right: "0",
    width: "300px"
}));

export const BoxLinearGradientBottom = styled(Box)(({ theme }) => ({
    backgroundImage: "linear-gradient(180deg, hsla(0, 0%, 100%, 0), #fff)",
    bottom: "0",
    height: "300px",
    position: "absolute",
    width: "100%"
}));

export const stylesIMG_Map = {
    borderRadius: "20px",
    height: "600px",
    width: "100%",
}