"use client";

import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function LegalInformation() {
  //////////////////// RESPONSIVES ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ padding: "100px" }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ fontWeight: "bold" }} variant={matches ? "h6" : "h4"}>
          Mentions légales
        </Typography>
        <Typography sx={{ fontWeight: "bold" }} variant={matches ? "h6" : "h4"}>
          En vigueur au 05/11/2024
        </Typography>
      </Box>
      <br />
      <br />
      <Typography variant={matches ? "body2" : "h6"}>
        Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour
        la Confiance en l&apos;économie numérique, il est porté à la
        connaissance des utilisateurs et visiteurs, ci-après l&apos;Utilisateur,
        du site adresse du site internet , ci-après le &quot;Site&quot;, les
        présentes mentions légales
      </Typography>
      <Typography variant={matches ? "body2" : "h6"}>
        La connexion et la navigation sur le Site par l&apos;Utilisateur
        implique acceptation intégrale et sans réserve des présentes mentions
        légales.
      </Typography>
      <Typography variant={matches ? "body2" : "h6"}>
        Ces dernières sont accessibles sur le Site à la rubrique &quot;Mentions
        légales&quot;.
      </Typography>
      <br />
      <br />
      <Typography sx={{ fontWeight: "bold" }} variant={matches ? "h6" : "h4"}>
        ÉDITION DU SITE
      </Typography>
      <br />
      <Typography variant={matches ? "body2" : "h6"}>
        L&apos;édition et la direction de la publication du Site est assurée par
        Monsieur Yoann Croguennec, domicilié 9 Rue Émile et Sgt Vincent Daubé,
        22000, Saint-Brieuc, dont le numéro de téléphone est 0765827083, et
        l&apos;adresse e-mail yoann.croguennec@gmail.com.
      </Typography>
      <br />
      <Typography variant={matches ? "body2" : "h6"}>
        ci-après l&apos;Éditeur.
      </Typography>
      <br />
      <br />

      <Typography sx={{ fontWeight: "bold" }} variant={matches ? "h6" : "h4"}>
        HÉBERGEUR
      </Typography>
      <br />
      <Typography variant={matches ? "body2" : "h6"}>
        L&apos;hébergeur du Site est la société Vercel, dont le siège social est
        situé au 340 S Lemon Ave #4133 91789 Californie.
      </Typography>
      <br />
      <br />
      <Typography sx={{ fontWeight: "bold" }} variant={matches ? "h6" : "h4"}>
        ACCÈS AU SITE
      </Typography>
      <br />
      <Typography variant={matches ? "body2" : "h6"}>
        Le Site est normalement accessible, à tout moment, à l&apos;Utilisateur.
        Toutefois, l&apos;Éditeur pourra, à tout moment, suspendre, limiter ou
        interrompre le Site afin de procéder, notamment, à des mises à jour ou
        des modifications de son contenu. L&apos;Éditeur ne pourra en aucun cas
        être tenu responsable des conséquences éventuelles de cette
        indisponibilité sur les activités de l&apos;Utilisateur.
      </Typography>
      <br />
      <br />
      <Typography sx={{ fontWeight: "bold" }} variant={matches ? "h6" : "h4"}>
        COLLECTE DES DONNÉES
      </Typography>
      <br />
      <Typography variant={matches ? "body2" : "h6"}>
        Le Site assure à l&apos;Utilisateur une collecte et un traitement des
        données personnelles dans le respect de la vie privée conformément à la
        loi n°78-17 du 6 janvier 1978 relative à l&apos;informatique, aux
        fichiers aux libertés et dans le respect de la réglementation applicable
        en matière de traitement des données à caractère personnel conformément
        au règlement (UE) 2016/679 du Parlement européen et du Conseil du 27
        avril 2016 (ci-après, ensemble, la &quot;Réglementation applicable en
        matière de protection des Données à caractère personnel&quot;).
      </Typography>
      <br />
      <Typography variant={matches ? "body2" : "h6"}>
        En vertu de la Réglementation applicable en matière de protection des
        Données à caractère personnel, l&apos;Utilisateur dispose d&apos;un
        droit d&apos;accès, de rectification, de suppression et
        d&apos;opposition de ses données personnelles. L&apos;Utilisateur peut
        exercer ce droit :
      </Typography>
      <br />
      <ul>
        <li>
          <Typography variant={matches ? "body2" : "h6"}>
            par mail à l&apos;adresse email
            &quot;yoann.croguennec@gmail.com&quot;,
          </Typography>
        </li>
        <li>
          <Typography variant={matches ? "body2" : "h6"}>
            par voie postale &quot;9 Rue Émile et Sgt Vincent Daubé, 22000,
            Saint-Brieuc&quot;,
          </Typography>
        </li>
        <li>
          <Typography variant={matches ? "body2" : "h6"}>
            depuis le formulaire de contact,
          </Typography>
        </li>
        {/* <li><Typography variant={matches ? "body2" : "h6"}>depuis son espace personnel</Typography></li> */}
      </ul>
      <br />

      <Typography variant={matches ? "body2" : "h6"}>
        Toute utilisation, reproduction, diffusion, commercialisation,
        modification de toute ou partie du Site, sans autorisation expresse de
        l&apos;Éditeur est prohibée et pourra entraîner des actions et
        poursuites judiciaires telles que prévues par la réglementation en
        vigueur.
      </Typography>
      <br />

      <Typography variant={matches ? "body2" : "h6"}>
        Pour plus d&apos;informations, se reporter aux CGU du site adresse du
        site internet accessibles depuis la rubrique &quot;CGU&quot;.
      </Typography>
      <Typography variant={matches ? "body2" : "h6"}>
        Pour plus d&apos;informations en matière de protection des données à
        caractère personnel, se reporter à la Charte en matière de protection
        des données à caractère personnel du site adresse du site internet
        accessible depuis la rubrique &quot;Données personnelles&quot;.
      </Typography>
      <Typography variant={matches ? "body2" : "h6"}>
        Pour plus d&apos;informations en matière de cookies, se reporter à la
        Charte en matière de cookies du site adresse du site internet accessible
        à la rubrique &quot;Cookies&quot;.
      </Typography>

      <Link href='http://legalplace.fr' target='_blank'>
        <Typography
          sx={{ fontWeight: "bold", textAlign: "right" }}
          variant={matches ? "body2" : "h6"}
        >
          Rédigé sur http://legalplace.fr
        </Typography>
        <br />
      </Link>
    </Box>
  );
}
