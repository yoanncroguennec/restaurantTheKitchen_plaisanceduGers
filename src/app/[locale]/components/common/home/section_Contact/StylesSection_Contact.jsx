"use client";

import { Box, styled } from "@mui/material";

export const Root = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
}));
