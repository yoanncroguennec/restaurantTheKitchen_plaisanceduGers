"use client";

import { Box, Button, styled, Typography } from "@mui/material";

export const RootSection_MenuCard = styled(Box)(({ theme }) => ({
  margin: "50px 250px",
  [theme.breakpoints.down("sm")]: {
    margin: "20px 20px",
  },
}));

export const TypoBold = styled(Typography)(({}) => ({
  fontWeight: "bold",
  margin: "10px 0",
}));

export const TypoBoldRight = styled(Typography)(({}) => ({
  fontWeight: "bold",
  margin: "10px 0",
  textAlign: "right",
}));

