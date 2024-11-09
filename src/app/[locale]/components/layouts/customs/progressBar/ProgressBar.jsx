"use client";

import { useState, useEffect } from 'react'
// STYLES
import { RootProgressBar, StylesProgressBar } from "./StylesProgressBar";

export default function ProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollY = window.scrollY

      const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100
      setScrollPercentage(scrollPercentage)
      // console.log("scrollPercentage :", scrollPercentage);
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <RootProgressBar>
      <StylesProgressBar scrollPercentage={scrollPercentage} />
    </RootProgressBar>
  )
}