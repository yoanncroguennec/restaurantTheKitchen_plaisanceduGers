import { Box, styled, Typography } from "@mui/material";

export const RootFooter = styled(Box)(({ theme }) => ({
  alignItems: "center",
  background: "#000",
  bottom: 0,
  color: "#FFF",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "20px",
  position: "fixed",
  width: "100vw",
  [theme.breakpoints.down("sm")]: {},
}));

export const Box_OpeningHours_Contact = styled(Box)(({ theme }) => ({
  alignItems: "",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-evenly",
  padding: "0 20px",
  width: "100vw",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const Box_Contact = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-evenly",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "start"
  },
}));

export const DividingLine = styled(Box)(({ theme }) => ({
  background: "#F0F",
  borderRadius: "25px",
  height: "4px",
  margin: "0 auto",
  marginTop: "15px",
  marginBottom: "15px",
  width: "20vw",
  [theme.breakpoints.down("sm")]: {},
}));

export const TextAlignBold = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {},
}));
