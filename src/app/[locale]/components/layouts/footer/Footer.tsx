"use client";

import Link from "next/link";
import {
  Box,
  styled,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import OpeningHours from "./openingHours/OpeningHours";
// import MyProfileDevelopper from "./myProfileDevelopper/MyProfileDevelopper";
import { useLocale } from "next-intl";

export const RootFooter = styled(Box)(({ theme }) => ({
  alignItems: "center",
  background: "#000",
  bottom: 0,
  color: "#FFF",
  display: "flex",
  // flexWrap: "nowrap",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "20px",
  position: "relative",
  width: "100vw",
  [theme.breakpoints.down("sm")]: {},
}));

export default function Footer() {
  //////////////////// RESPONSIVES ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  //
  const localActive = useLocale();

  return (
    <RootFooter>
      <Box
        sx={{
          alignItems: "",
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "space-evenly",
          width: "100vw",
        }}
      >
        <Box>
          <OpeningHours />
        </Box>
        <Box>
          <Typography variant={matches ? "h6" : "h4"}>Contact</Typography>
          <Typography variant={matches ? "body2" : "h6"}>
            26 Rue de l'Adour, 32160 Plaisance
          </Typography>
          <Link href='#' target='_blank'>
            <Typography variant={matches ? "body2" : "h6"}>
              07 80 29 36 33
            </Typography>
          </Link>
          <Link href='#' target='_blank'>
            Facebook
          </Link>
        </Box>
      </Box>

      <Box>
        <Link href={`/${localActive}/pages/legalInformation`} target='_blank'>
          <Typography variant={matches ? "body2" : "h6"}>
            Mentions légales
          </Typography>
        </Link>
        <Link href='#' target='_blank'>
          <Typography variant={matches ? "body2" : "h6"}>
            Conditions Générales d'Utilisation
          </Typography>
        </Link>
      </Box>
      {/* <MyProfileDevelopper /> */}
    </RootFooter>
  );
}
