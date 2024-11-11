// Source Lesson : "Youtube"
// Teacher Lesson : "Code With Yd"
// Desc Lesson : "Responsive Image gallery in React js | Build a Photo Gallery With React js | Image Gallery in React"
// Link Lesson : "https://www.youtube.com/watch?v=cDwa_JwuC-w&t=427s"
"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Box } from "@mui/material";
// ICONS
import { IoMdClose } from "react-icons/io";
// IMGS
import plat_1 from "/public/assets/imgs/home/plats/plat_1.jpg";
import plat_2 from "/public/assets/imgs/home/plats/plat_2.jpg";
import plat_3 from "/public/assets/imgs/home/plats/plat_3.jpg";
import plat_4 from "/public/assets/imgs/home/plats/plat_4.jpg";
import plat_5 from "/public/assets/imgs/home/plats/plat_5.jpg";
import plat_6 from "/public/assets/imgs/home/plats/plat_6.jpg";
import plat_7 from "/public/assets/imgs/home/plats/plat_7.jpg";
import plat_8 from "/public/assets/imgs/home/plats/plat_8.jpg";
import plat_9 from "/public/assets/imgs/home/plats/plat_9.jpg";
import plat_10 from "/public/assets/imgs/home/plats/plat_10.jpg";
import plat_11 from "/public/assets/imgs/home/plats/plat_11.jpg";
import plat_12 from "/public/assets/imgs/home/plats/plat_12.jpg";
import plat_13 from "/public/assets/imgs/home/plats/plat_13.jpg";
import plat_14 from "/public/assets/imgs/home/plats/plat_14.jpg";
import plat_15 from "/public/assets/imgs/home/plats/plat_15.jpg";
import plat_16 from "/public/assets/imgs/home/plats/plat_16.jpg";
import plat_17 from "/public/assets/imgs/home/plats/plat_17.jpg";
import plat_18 from "/public/assets/imgs/home/plats/plat_18.jpg";
import plat_19 from "/public/assets/imgs/home/plats/plat_19.jpg";
import plat_20 from "/public/assets/imgs/home/plats/plat_20.jpg";

const imgs_plats = [plat_1, plat_2, plat_3, plat_4, plat_5, plat_6, plat_7, plat_8, plat_9, plat_10, plat_11, plat_12, plat_13, plat_14, plat_15, plat_16, plat_17, plat_18, plat_19, plat_20]

export default function PhotoGallery() {
    const [modelImg, setModelImg] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState("")

    function handleGetImg(img) {
        setTempImgSrc(img)
        setModelImg(true)
    }

    return (
        <Box>
            <Box></Box>
            <Box className={modelImg ? "model open" : "model"}>
                <Image
                    alt="tempImgSrc"
                    height={400}
                    src={tempImgSrc}
                    // style={{ height: "400px", width: "100%" }}
                    width={400}
                />
                <IoMdClose color='#F00' onClick={() => setModelImg(false)} size={50} style={{ position: "fixed", top: "10px", right: "10px", cursor: "pointer", padding: "5px" }} />
            </Box>
            <Box className="gallery">
                {imgs_plats.map((img, index) => (
                    <Box className="pics" key={index} onClick={() => handleGetImg(img)}>
                        <Image
                            alt="plat_1"
                            height={400}
                            src={img}
                            // style={{ height: "400px", width: "100%" }}
                            width={400}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
