/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./App.css";
import { Box, Button, Paper, Stack, Typography, styled } from "@mui/material";
import { keyframes } from "@emotion/react";
import { grey, pink, purple } from "@mui/material/colors";
import { useEffect, useMemo, useState } from "react";
import DynamicAppBar from "./components/DynamicAppBar";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";

function App() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0 && !isTop) {
        console.log("top");
        setIsTop(true);
      } else if (currentScrollY > 0 && isTop) {
        console.log("not top");
        setIsTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTop]);
  return (
    <>
      <DynamicAppBar isTop={isTop} />
      <SectionOne />
      <SectionTwo/>
    </>
  );
}

export default App;
