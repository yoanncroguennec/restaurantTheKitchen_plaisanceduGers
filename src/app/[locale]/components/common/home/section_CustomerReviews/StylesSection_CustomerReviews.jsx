"use client"

import { Box, styled } from "@mui/material";

export const Root = styled(Box)(({ theme }) => ({
    width: "90vw",
    margin: "5rem auto",
    maxWidth: "1170px",
    [theme.breakpoints.down("sm")]: {
        width: "95vw",
    },
}));

export const Box_Icon_Arrow = styled(Box)(({ theme }) => ({
    display: "grid",
    cursor: "pointer",
    position: "absolute",
    top: "200px",
    transform: "translateY(-50%)",
    [theme.breakpoints.down("sm")]: {
        width: "95vw",
    },
}));