"use client";

import { Box, Button, styled, Typography } from "@mui/material";

export const RootSection_MenuCard = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  minHeight: "50vh",
  [theme.breakpoints.down("sm")]: {},
}));

export const DividingLine = styled(Box)(({ theme }) => ({
  background: "#c59d5f",
  height: "0.25rem",
  margin: "20px 0",
  width: "6rem",
  [theme.breakpoints.down("sm")]: {},
}));

export const BoxSelect = styled(Box)(({ theme }) => ({
  width: "300px",
  [theme.breakpoints.down("sm")]: {},
}));

export const Box_No_CategorySelected = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  marginTop: "40px",
  [theme.breakpoints.down("sm")]: {},
}));

export const RootListItems = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  [theme.breakpoints.down("sm")]: {},
}));

export const BoxListItems = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-evenly",
  margin: "5px 0",
  [theme.breakpoints.down("sm")]: {},
}));


export const BoxTitleDesc = styled(Box)(({ theme }) => ({
   width: "60%",
  [theme.breakpoints.down("sm")]: {},
}));

export const BoxBtn = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  [theme.breakpoints.down("sm")]: {},
}));


export const TypoBold = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {},
}));
