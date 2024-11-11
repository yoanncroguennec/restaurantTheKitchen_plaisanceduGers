// A NE PAS MODIFIER
import { useTheme, useMediaQuery, Modal, Typography } from "@mui/material";
// DATAS
import { dataProducersAndPartners } from "@/app/[locale]/utils/constants/data/dataProducersAndPartners";
import Image from "next/image";
import Link from "next/link";
// STYLES
import {
  BoxModal,
  BoxCard,
  TypoBold,
  StylesIcon,
  TypoLink,
} from "./StylesProducersAndPartners";

export default function ProducersAndPartners({ open, handleClose }) {
  //////////////////// RESPONSIVES ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Modal open={open} onClose={handleClose}>
      <BoxModal>
        {dataProducersAndPartners.map(
          ({ id, name, address, description, img, url, tel }) => (
            <BoxCard key={id}>
              <TypoBold variant={matches ? "body1" : "h6"}>{name}</TypoBold>
              <Typography variant={matches ? "body2" : "h6"}>
                {address}
              </Typography>
              <Image
                alt='logo'
                height={150}
                src={img}
                style={StylesIcon}
                width={150}
              />
              <Typography variant={matches ? "body2" : "h6"}>
                {description}
              </Typography>
              {tel == null ? (
                ""
              ) : (
                <Link href='${tel}' target='_blank'>
                  <TypoLink variant={matches ? "body2" : "h6"}>{tel}</TypoLink>
                </Link>
              )}
              {url == null ? (
                ""
              ) : (
                <Link href='${url}' target='_blank'>
                  <TypoLink variant={matches ? "body2" : "h6"}>{url}</TypoLink>
                </Link>
              )}
            </BoxCard>
          )
        )}
      </BoxModal>
    </Modal>
  );
}
