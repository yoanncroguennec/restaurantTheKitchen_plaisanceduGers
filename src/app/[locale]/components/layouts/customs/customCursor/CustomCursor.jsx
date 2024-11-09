"use client"

import React, { useEffect, useRef } from 'react'
// STYLES
import { RootCustomCursor } from "./StylesCustomCursor";

export default function CustomCursor() {
    const cursorRef = useRef(null)

    useEffect(() => {
      document.addEventListener("mousemove", (event) => {
        const { clientX, clientY } = event;
        
        const mouseX = clientX - cursorRef.current.clientWidth / 2;
        const mouseY = clientY - cursorRef.current.clientWidth / 2;

        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      });
    }, [])
    
  return (
    <RootCustomCursor ref={cursorRef} />
  )
}