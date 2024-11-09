// Source Lesson : "Youtube"
// Teacher Lesson : "CodeWithVishal"
// Desc Lesson : "Build Restaurant Menu List App using React | React JS Beginner Project"
// Link Lesson : "https://www.youtube.com/watch?v=cMsuccmyX7Y&t=198s"
"use client"

import React, { useState, useEffect } from "react";
import { Box, Rating, Typography } from "@mui/material";
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
        <section>
            <div className="section-center">
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

                    const [value, setValue] = useState(rating);

                    return (
                        <article className={position} key={id}>
                            <Img_CategoryCondition category={category} />
                            <Typography variant="h4">{name}</Typography>
                            <Rating name="read-only" value={value} readOnly />
                            <Typography variant="h6">{title}</Typography>
                            <Typography variant="h6">{desc}</Typography>
                        </article>
                    );
                })}
                <Box_Icon_Arrow style={{ left: "0" }}>
                    <FaAngleLeft color="#000" onClick={() => setIndex(index - 1)} size={50} />
                </Box_Icon_Arrow>

                <Box_Icon_Arrow style={{ right: "0" }}>
                    <FaChevronRight color="#000" onClick={() => setIndex(index + 1)} size={50} />
                </Box_Icon_Arrow>
            </div>
        </section>
    )
}
