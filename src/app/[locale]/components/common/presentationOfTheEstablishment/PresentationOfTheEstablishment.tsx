import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

export default function PresentationOfTheEstablishment() {
  const t = useTranslations("PresentationOfTheEstablishment");

  // Make line breaks work when you render text in a React or Vue component : https://dev.to/cassidoo/make-line-breaks-work-when-you-render-text-in-a-react-or-vue-component-4m0n
  function replaceWithBr() {
    return t("textPresentation").replace(/\n/g, "<br />");
  }

  return (
    <Box>
      <Typography sx={{ margin: "20px 0"}} variant="h6">{t("title")}</Typography>
      <Typography
        dangerouslySetInnerHTML={{ __html: replaceWithBr() }}
        sx={{ textAlign: "justify" }}
        variant="h6"
      />
      <Typography sx={{ textAlign: "right" }} variant="h6">{t("finalWord")}</Typography>
    </Box>
  );
}
