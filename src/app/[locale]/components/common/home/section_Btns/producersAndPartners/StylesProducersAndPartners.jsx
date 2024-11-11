"use client";

import { Box, styled, Typography } from "@mui/material";

export const BoxModal = styled(Box)(({ theme }) => ({
  backgroundColor: "transparent",
  display: "grid",
  gap: "40px",
  gridTemplateColumns: "repeat(2, 1fr)",
  left: "50%",
  position: "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(1, 1fr)",
    height: "550px",
    overflowY: "scroll",
  },
}));

export const BoxCard = styled(Box)(({ theme }) => ({
  alignItems: "center",
  background: "#FFF",
  border: "1px solid #000",
  borderRadius: "25px",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  color: "#000",
  display: "flex",
  flexDirection: "column",
  padding: "20px 0",
  width: "450px",
  "&:hover": {
    transform: "scale(1.1)",
  },
  [theme.breakpoints.down("sm")]: {
    boxShadow: 0,
    width: "300px",
    "&:hover": {
      transform: "scale(1)",
    },
  },
}));

export const TypoBold = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
}));

export const StylesIcon = {
  height: "60px",
  width: "60px",
};

export const TypoLink = styled(Typography)(({ theme }) => ({
  "&:hover": {
    color: "#F0F",
    cursor: "pointer",
  },
}));
