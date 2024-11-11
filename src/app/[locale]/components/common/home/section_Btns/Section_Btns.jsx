import { Box, Button } from "@mui/material";
import { useLocale } from "next-intl";
import Link from "next/link";
import React from "react";

export default function Section_Btns() {
  const localActive = useLocale();

  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Link href={`/${localActive}/pages/photoGallery`}>
        <Button variant='outlined'>Notre galerie photo</Button>
      </Link>
      <Link href={`/${localActive}/auth/register`}>
        <Button variant='outlined'>Nos producteurs locaux</Button>
      </Link>
    </Box>
  );
}
