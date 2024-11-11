import { Box, Button, Modal, Typography } from "@mui/material";
import { useLocale } from "next-intl";
import Link from "next/link";
import React, { useState } from "react";
import ProducersAndPartners from "./producersAndPartners/ProducersAndPartners";

export default function Section_Btns() {
  const localActive = useLocale();

  //*
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-evenly",
        minHeight: "50vh",
      }}
    >
      <Link href={`/${localActive}/pages/photoGallery`}>
        <Button variant='outlined'>Notre galerie photo</Button>
      </Link>

      <Button onClick={handleOpen} variant='outlined'>
        Nos producteurs locaux
      </Button>
      <ProducersAndPartners open={open} handleClose={handleClose} />
    </Box>
  );
}
