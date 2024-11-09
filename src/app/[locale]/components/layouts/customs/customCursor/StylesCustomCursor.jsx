"use client"

import { styled, Box } from "@mui/material";

export const RootCustomCursor = styled(Box)(({ theme }) => ({
    // background: "yellow",
    border: "2px solid #F0F",
    borderRadius: "50%",
    height: "50px",
    overflow: "hidden",
    pointerEvents: "none",
    position: "fixed",
    transform: "translate3d(0, 0, 0)",
    width: "50px",
    zIndex: 1000,
    [theme.breakpoints.down("sm")]: {},
}));