"use client"

import { Box } from "@mui/material";
import ScrollToTop from "react-scroll-to-top";
import {
  Section_PresentationOfTheEstablishment,
  Section_MenuCard,
  Section_CustomerReviews,
  Section_Btns,
  Section_Contact,
  Section_Map,
} from "../../components/common";

export default function pages() {
  return (
    <Box>
      {/* <Box sx={{ alignItems: "center", background: "red", display: "flex",minHeight: "100vh", maxWidth: "100vw" }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, maxime.
      </Box> */}
      <Section_PresentationOfTheEstablishment />
      <Section_MenuCard />
      <Section_CustomerReviews />
      <Section_Btns />
      <Section_Contact />
      <Section_Map />
      <ScrollToTop smooth />
    </Box>
  );
}
