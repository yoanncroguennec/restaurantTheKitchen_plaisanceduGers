"use client";

import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import uu from "./test.json";
export default function Section_PresentationOfTheEstablishment() {
  const [translate, setTranslate] = useState("fr");

  const yy = [
    {
      fr: [
        {
          title: "Bienvenue à The Kitchen !",
          textPresentation:
            "Nous nous présentons, nous sommes Leigh et Robert.\nNous sommes installés dans les montagnes du sud de la France depuis 2005.\n\n Moi, Leigh, j&#39;ai travaillé dans la restauration privée dans les Alpes pendant 3 ans avant de déménager dans le sud et de gérer mon propre restaurant. Au fil des ans, j'ai travaillé en cuisine avec de nombreux chefs (français, britanniques, italiens et espagnols) et j'ai adoré apprendre d&#39;eux.\n\n Robert est un chef de formation classique et a dirigé son propre hôtel pendant 16 ans avant de me rejoindre pour de nouvelles aventures.\n\n L'occasion de troquer les montagnes pour une vie au milieu des vignobles s&#39;est présentée au début de cette année et nous sommes impatients de vous présenter quelques-uns de nos plats préférés, issus non seulement des montagnes mais aussi de nos voyages.\n\n Nous espérons que vous passerez un agréable moment en notre compagnie",
          finalWord: "Bon appetit",
        },
      ],
      en: [
        {
          title: "Welcome to The Kitchen !",
          textPresentation:
            "We’d like to introduce ourselves, we're Leigh and Robert.\n\n We've been based in the mountains of southern France since 2005.\n\n I, Leigh, worked in private catering in the Alps for 3 years before moving south and running my own restaurant. Over the years, I have worked in the kitchen with many chefs (French, British, Italian, and Spanish) and have loved learning from them. Robert is a classically trained chef who ran his own hotel for 16 years before joining me for new adventures.\n\n The opportunity to swap the mountains for a life among the vineyards presented itself earlier this year, and we can't wait to introduce you to some of our favourite dishes, drawn not only from the mountains but also from our travels.\n\n We hope you enjoy your time with us.",
          finalWord: "Bon appetit",
        },
      ],
    },
  ];

  // return <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, quo! ___________ {uu.fr.title} -------------------</h5>;

  // if (translate == ) {

  // }

  const tt =
    "Nous nous présentons, nous sommes Leigh et Robert.\nNous sommes installés dans les montagnes du sud de la France depuis 2005.\n\n Moi, Leigh, j&#39;ai travaillé dans la restauration privée dans les Alpes pendant 3 ans avant de déménager dans le sud et de gérer mon propre restaurant. Au fil des ans, j'ai travaillé en cuisine avec de nombreux chefs (français, britanniques, italiens et espagnols) et j'ai adoré apprendre d&#39;eux.\n\n Robert est un chef de formation classique et a dirigé son propre hôtel pendant 16 ans avant de me rejoindre pour de nouvelles aventures.\n\n L'occasion de troquer les montagnes pour une vie au milieu des vignobles s&#39;est présentée au début de cette année et nous sommes impatients de vous présenter quelques-uns de nos plats préférés, issus non seulement des montagnes mais aussi de nos voyages.\n\n Nous espérons que vous passerez un agréable moment en notre compagnie";

  // Make line breaks work when you render text in a React or Vue component : https://dev.to/cassidoo/make-line-breaks-work-when-you-render-text-in-a-react-or-vue-component-4m0n
  function replaceWithBr() {
    return tt.replace(/\n/g, "<br />");
  }

  return (
    <Box sx={{ margin: "50px 250px" }}>
      <Typography sx={{ margin: "20px 0" }} variant='h6'>
        Bienvenue à The Kitchen !
      </Typography>
      <Typography
        dangerouslySetInnerHTML={{ __html: replaceWithBr() }}
        sx={{ textAlign: "justify" }}
        variant='h6'
      />
      <Typography sx={{ textAlign: "right" }} variant='h6'>
        Bon appetit
      </Typography>
    </Box>
  );
}
