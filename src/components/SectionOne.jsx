import { useState, useEffect, useMemo } from "react";
import { Box, Button, Typography } from "@mui/material";
import { AttentionSeeker, Slide as AweSlide } from "react-awesome-reveal";
import { pink, grey, purple } from "@mui/material/colors";
// import { MyAvatar} from "./MyAvatar";
import MyAvatar from "./MyAvatar";
import { keyframes } from "@emotion/react";
const customKeyframes = keyframes`
from {
  transform: translateX(-200%);
}
to {
  transform: translateX(0);
}
`;
const pinkcolor = pink;
const useMemoizedSkillList = () => {
  return useMemo(() => ["Flutter", "React", "Node", "MongoDB"], []);
};
export default function SectionOne() {
  const skillList = useMemoizedSkillList();
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [indexskill, setIndexSkill] = useState(0);
  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (!isDeleting && index < skillList[indexskill].length) {
          setText((prev) => prev + skillList[indexskill][index]);
          setIndex((prev) => prev + 1);
        } else if (isDeleting && index > 0) {
          setText((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        } else if (index === 0) {
          setIsDeleting(false);
          setIndexSkill((prev) => (prev + 1) % skillList.length);
        } else if (index === skillList[indexskill].length) {
          setIsDeleting(true);
        }
      },
      isDeleting ? 100 : 200
    );
    return () => clearTimeout(timer);
  }, [indexskill, index, isDeleting, skillList]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearTimeout(timer);
  }, [showCursor]);
  return (
    <Box
      component="div"
      height={{ xs: "100vh", md: "70vh" }}
      paddingTop={{ xs: 8, md: 6 }}
      width="100%"
      sx={{
        background: `linear-gradient(180deg, ${pinkcolor[500]} 10%, ${pinkcolor[800]} 90%)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
      }}
    >
      <Box
        component="div"
        maxWidth="xl"
        width="100%"
        height="100%"
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={1}
      >
        <AweSlide
          direction="left"
          delay={300}
          duration={1500}
          triggerOnce
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          keyframes={customKeyframes}
        >
          <>
            <MyAvatar />
          </>
        </AweSlide>
        <AweSlide
          direction="right"
          triggerOnce
          style={{
            flex: 2,
            alignSelf: "center",
          }}
        >
          <Box
            component="div"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            borderRadius={2}
            color="white"
            textAlign="center"
          >
            <Typography variant="h5" color={grey[300]}>
              React Awesome Reveal
            </Typography>
            <Box
              component="div"
              display="flex"
              gap={1}
              flexDirection={{ xs: "column", lg: "row" }}
            >
              <Typography variant="h2" color={grey[50]} fontWeight="bold">
                I&apos;m a freelance
              </Typography>
              <Box
                component="mark"
                color="white"
                sx={{
                  backgroundImage: `linear-gradient(120deg, ${purple[500]}, ${purple[800]}) `,
                  backgroundPosition: "0 80%",
                  position: "relative",
                  backgroundSize: "auto 0.80em",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "transparent",
                  alignSelf: "center",
                }}
              >
                <Typography
                  variant="h2"
                  color={grey[50]}
                  fontWeight="bold"
                  sx={{
                    height: { xs: "1.5em", lg: "auto" },
                  }}
                >
                  {text}
                </Typography>
              </Box>
            </Box>
            <Typography variant="h2" color={grey[300]} fontWeight="bold">
              Developer
            </Typography>
           <AttentionSeeker effect="rubberBand" delay={500}>
           <Button
              variant="contained"
              color="secondary"
             size="large"
              sx={{
                marginTop: 3,
                "&:active":{
                    transform: "scale(0.8)",
                    transition: "all 0.3s ease-in-out",
                }
              }}
            >
              Download CV
            </Button>
           </AttentionSeeker>
          </Box>
        </AweSlide>
      </Box>
    </Box>
  );
}
