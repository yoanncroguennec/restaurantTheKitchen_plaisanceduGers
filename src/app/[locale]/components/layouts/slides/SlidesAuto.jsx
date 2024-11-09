// Link Lesson: "https://www.youtube.com/watch?v=tXlZCW26bto"
// Teacher Lesson: "Code Commerce"
// Desc Lesson: "Build a React Image Slider with Tailwind CSS"

"use client";

import React, { useEffect, useRef, useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import Image from "next/image";
// STYLES
import { BoxChevronArrow, BoxImgSlide, BoxSelectionPoints, RootSlidesAuto } from "./StylesSlidesAuto";
// ICONS
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

export default function SlidesAuto() {
    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        },

        {
            url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);


    const delay = 2500;
    const timeoutRef = useRef(null);
    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setCurrentIndex((prevIndex) =>
                    prevIndex === slides.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [currentIndex]);

    function prevSlide() {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    function nextSlide() {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    function goToSlide(slideIndex) {
        setCurrentIndex(slideIndex);
    };

    return (
        <RootSlidesAuto className='group'>
            <BoxImgSlide style={{ backgroundImage: `url(${slides[currentIndex].url})` }}/>
            {/* Left Arrow */}
            <BoxChevronArrow left={"20px"} className='group-hover:block'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </BoxChevronArrow>
            {/* Right Arrow */}
            <BoxChevronArrow right={"20px"} className='group-hover:block'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </BoxChevronArrow>
            <BoxSelectionPoints>
                {slides.map((slide, slideIndex) => (
                    <RxDotFilled key={slideIndex} onClick={() => goToSlide(slideIndex)} size={50} style={{ cursor: "pointer" }} />
                ))}
            </BoxSelectionPoints>
        </RootSlidesAuto>
    )
}
