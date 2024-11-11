/// A NE PLUS TOUCHER

// Source Lesson : "Youtube"
// Teacher Lesson : "Code With Yd"
// Desc Lesson : "Responsive Image gallery in React js | Build a Photo Gallery With React js | Image Gallery in React"
// Link Lesson : "https://www.youtube.com/watch?v=cDwa_JwuC-w&t=427s"
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useMediaQuery, useTheme } from "@mui/material";
// ICONS
import { IoMdClose } from "react-icons/io";
// DATAS
import { dataPhotoGallery } from "../../utils/constants/data/pages/photoGallery/dataPhotoGallery";
// STYLES
import {
  RootPhotoGallery,
  TypoTitlePage,
  BoxModalImg,
  StylesImgOfModal,
  BoxGallery,
  StylesImg,
  stylesIconClose,
} from "./StylesPhotoGallery";

export default function PhotoGallery() {
  //////////////////// RESPONSIVES ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [modelImg, setModelImg] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  function handleGetImg(img) {
    setTempImgSrc(img);
    setModelImg(true);
  }

  return (
    <RootPhotoGallery>
      <TypoTitlePage variant={matches ? "h6" : "h4"}>
        Notre galerie photo
      </TypoTitlePage>

      {/* MODAL OPEN PHOTO */}
      <BoxModalImg modelImg={modelImg}>
        <Image
          alt='tempImgSrc'
          height={400}
          src={tempImgSrc}
          style={StylesImgOfModal}
          width={400}
        />
        <IoMdClose
          color='#F00'
          onClick={() => setModelImg(false)}
          size={50}
          style={stylesIconClose}
        />
      </BoxModalImg>

      {/* LIST PHOTOS GALERY */}
      <BoxGallery>
        {dataPhotoGallery.map((img, index) => (
          <StylesImg
            key={index}
            onClick={() => handleGetImg(img)}
          >
            <Image
              alt='image'
              height={400}
              src={img}
              style={{ borderRadius: "20px", height: "400px", width: "100%" }}
              width={400}
            />
          </StylesImg>
        ))}
      </BoxGallery>
    </RootPhotoGallery>
  );
}
