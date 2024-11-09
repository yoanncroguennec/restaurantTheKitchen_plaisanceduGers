"use client";

import { Box, styled, Typography } from "@mui/material";

export const RootOpeningHours = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "nowrap",
    [theme.breakpoints.down("sm")]: {},
}));


export const TypoDay = styled(Typography)(({ theme, color }) => ({
    color: color,
    fontWeight: "bold",
    marginRight: "10px",
    [theme.breakpoints.down("sm")]: {},
}));
