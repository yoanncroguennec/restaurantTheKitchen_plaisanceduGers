// A NE PLUS TOUCHER
"use client";

import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
// STYLES
import {
  RootSection_MenuCard,
  TypoBold,
  TypoBoldRight,
} from "./StylesSection_PresentationOfTheEstablishment";

export default function Section_PresentationOfTheEstablishment() {
  const [t] = useTranslation("global");
  //////////////////// RESPONSIVES ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  // Make line breaks work when you render text in a React or Vue component : https://dev.to/cassidoo/make-line-breaks-work-when-you-render-text-in-a-react-or-vue-component-4m0n
  function replaceWithBr() {
    return t("presentationOfTheEstablishment.textPresentation").replace(
      /\n/g,
      "<br />"
    );
  }

  return (
    <RootSection_MenuCard>
      <TypoBold variant={matches ? "h6" : "h4"}>
        {t("presentationOfTheEstablishment.title")}
      </TypoBold>
      <Typography
        dangerouslySetInnerHTML={{ __html: replaceWithBr() }}
        sx={{ textAlign: "justify" }}
        variant={matches ? "body2" : "h6"}
      />
      <TypoBoldRight variant={matches ? "body1" : "h5"}>
        {t("presentationOfTheEstablishment.finalWord")}
      </TypoBoldRight>
    </RootSection_MenuCard>
  );
}
