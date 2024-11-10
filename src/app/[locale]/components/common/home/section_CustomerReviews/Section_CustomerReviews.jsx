// Source Lesson : "Youtube"
// Teacher Lesson : "CodeWithVishal"
// Desc Lesson : "Build Restaurant Menu List App using React | React JS Beginner Project"
// Link Lesson : "https://www.youtube.com/watch?v=cMsuccmyX7Y&t=198s"
"use client";

import React, { useState, useEffect } from "react";
import { Box, Rating, Typography, useMediaQuery, useTheme } from "@mui/material";
//
import Img_CategoryCondition from "./img_CategoryCondition/Img_CategoryCondition";
// DATAS
import data from "@/app/[locale]/utils/constants/data/dataCustomerReviews";
// ICONS
import { FaAngleLeft, FaChevronRight } from "react-icons/fa";
// STYLES
import { Box_Icon_Arrow } from "./StylesSection_CustomerReviews";
import "./Slider.css";

export default function Section_CustomerReviews() {
  //////////////////// RESPONSIVES ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  // 
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <Box
      // className='section-center'
      sx={{
        margin: "0 auto",
        marginTop: "4rem",
        minHeight: "100vh",
        maxWidth: "800px",
        textAlign: "center",
        position: "relative",
        display: "flex",
        overflow: "hidden",
        width: "80vw",
      }}
    >
      {people.map((item, indexPeople) => {
        const { id, name, category, title, date, rating, desc } = item;
        let position = "nextSlide";

        if (indexPeople === index) {
          position = "activeSlide";
        }

        if (
          indexPeople === index - 1 ||
          (index === 0 && indexPeople === people.length - 1)
        ) {
          position = "lastSlide";
        }

        const [value] = useState(rating);

        return (
          <article className={position} key={id}>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "center",
              }}
            >
              <Img_CategoryCondition category={category} />
              <Box sx={{}}>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant={matches ? "h6" : "h4"}
                >
                  {name}
                </Typography>
                <Rating name='read-only' value={value} readOnly />
                <Typography variant={matches ? "body2" : "h6"}>
                  {title}
                </Typography>
              </Box>
            </Box>
            <Typography variant={matches ? "body2" : "h6"}>{desc}</Typography>
          </article>
        );
      })}
      <Box_Icon_Arrow style={{ left: "0" }}>
        <FaAngleLeft
          color='#000'
          onClick={() => setIndex(index - 1)}
          size={matches ? 20 : 50}
        />
      </Box_Icon_Arrow>

      <Box_Icon_Arrow style={{ right: "0" }}>
        <FaChevronRight
          color='#000'
          onClick={() => setIndex(index + 1)}
          size={40}
        />
      </Box_Icon_Arrow>
    </Box>
  );
}
