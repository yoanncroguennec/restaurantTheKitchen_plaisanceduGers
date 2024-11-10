import React from 'react'
import { Box } from "@mui/material";
import { Section_MenuCard, Section_CustomerReviews } from "../../components/common";

export default function pages() {
  return (
    <Box>
      {/* <Box sx={{ alignItems: "center", background: "red", display: "flex",minHeight: "100vh", maxWidth: "100vw" }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, maxime.
      </Box> */}
      <Section_MenuCard />
      <Section_CustomerReviews />
    </Box>
  );
}
