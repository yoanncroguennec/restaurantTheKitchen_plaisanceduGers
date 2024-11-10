// A NE PLUS TOUCHER
"use client";

import Link from "next/link";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useLocale } from "next-intl";
//
import OpeningHours from "./openingHours/OpeningHours";
// ICONS
import { FaFacebookF } from "react-icons/fa";
// STYLES
import {
  RootFooter,
  Box_OpeningHours_Contact,
  Box_Contact,
  DividingLine,
  TextAlignBold,
} from "./StylesFooter.jsx";

export default function Footer() {
  //////////////////// RESPONSIVES ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  //
  const localActive = useLocale();

  return (
    <RootFooter>
      <Box_OpeningHours_Contact>
        <Box>
          <TextAlignBold variant={matches ? "h6" : "h4"}>
            Horaires
          </TextAlignBold>
          <OpeningHours />
        </Box>

        {matches ? <DividingLine /> : null}

        <Box>
          <TextAlignBold variant={matches ? "h6" : "h4"}>Contact</TextAlignBold>
          <Typography variant={matches ? "body2" : "h6"}>
            26 Rue de l'Adour, 32160 Plaisance
          </Typography>
          <Box_Contact>
            <Link href='#' target='_blank'>
              <Typography variant={matches ? "body2" : "h6"}>
                07 80 29 36 33
              </Typography>
            </Link>
            <Link href='#' target='_blank'>
              <FaFacebookF color='#00F' size={30} />
            </Link>
          </Box_Contact>
        </Box>
      </Box_OpeningHours_Contact>
      <DividingLine />

      <Box>
        <Link href={`/${localActive}/pages/legalInformation`} target='_blank'>
          <TextAlignBold variant={matches ? "body1" : "h6"}>
            Mentions légales
          </TextAlignBold>
        </Link>
        <Link href='#' target='_blank'>
          <TextAlignBold variant={matches ? "body1" : "h6"}>
            Conditions Générales d'Utilisation
          </TextAlignBold>
        </Link>
      </Box>
    </RootFooter>
  );
}
