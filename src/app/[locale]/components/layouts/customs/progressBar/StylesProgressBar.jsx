"use client";

import { Box, styled } from "@mui/material";

export const RootProgressBar = styled(Box)(({ theme }) => ({
    background: "#D1DCED",
    display: "flex",
    height: "5px",
    position: "fixed",
    top: "45px",
    width: "100vw",
    zIndex: 999,
    [theme.breakpoints.down("sm")]: {},
}));

export const StylesProgressBar = styled(Box)(({ scrollPercentage }) => ({
    background: "#00F",
    height: "100%",
    width: `${scrollPercentage}%`,
}));