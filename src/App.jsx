/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./App.css";
import {
  Alert,
  Box,
  Button,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { keyframes } from "@emotion/react";
import { grey, pink, purple } from "@mui/material/colors";
import { useEffect, useMemo, useState } from "react";
import DynamicAppBar from "./components/DynamicAppBar";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import Grid from "@mui/material/Unstable_Grid2";
import { AttachMoney, Layers, TaskAlt } from "@mui/icons-material";
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
      <SectionTwo />
      <Box
        component="div"
        sx={{
          backgroundImage: "linear-gradient(180deg, #f9fbfd 0, #fff);",
        }}
      >
        <Box
          maxWidth="xl"
          sx={{
            width: "100%",
           paddingY: "6rem",
            marginX: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            direction="column"
            spacing={0}
            alignItems="center"
            justifyContent="center"
            maxWidth="sm"
          >
            <Box
              component="span"
              sx={{
                textTransform: "uppercase",
                fontFamily: "kanit",
                backgroundColor: "rgba(105, 195, 128, 0.1);",
                color: "#69c380",
                padding: "7px 14px",
                fontSize: "13px",
                borderRadius: ".25rem",
              }}
            >
              Services
            </Box>
            <Box
              component="div"
              sx={{
                position: "relative",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: "#f1f6fa",
                  fontFamily: "kanit",
                  fontWeight: "bold",
                  lineHeight: "0.8",
                  display: "inline-block",
                }}
              >
                Services
              </Typography>
              <Box
                component="div"
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  transform: "rotate(-5deg)",
                  top: 0,
                  left: 0,
                  zIndex: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "500",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "2.5rem",
                  }}
                >
                  Our Services
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="p"
              sx={{
                color: "#6f809b",
                fontFamily: "kanit",
                textAlign: "center",
                fontSize: "18px",
                lineHeight: "2",
              }}
            >
              We craft digital, graphic and dimensional thinking, to create
              category leading brand experiences that have meaning .
            </Typography>
          </Stack>
          <>
            <Grid container spacing={4} width="100%">
              <CardItem
                color="#f78c4b"
                bgcolor="rgba(247, 140, 75, 0.1)"
                title="Awesome Support"
                icon={<Layers sx={{
                  height: "30px",
                  width: "30px",
                }} />}
                description="Some quick example text to build on the card title and make up the bulk of the card's content platform."
              />
              <CardItem
                color="#377dff"
                bgcolor="rgba(55, 125, 255, 0.1)"
                title="Dynamic Growth"
                icon={<AttachMoney sx={{
                  height: "30px",
                  width: "30px",
                }} />}
                description="Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt."
              />
              <CardItem
                color="#69c380"
                bgcolor="rgba(105, 195, 128, 0.1)"
                title="Dynamic Growth"
                icon={<TaskAlt sx={{
                  height: "30px",
                  width: "30px",
                }} />}
                description="Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt."
              />
            </Grid>
          </>
        </Box>
      </Box>
    </>
  );
}

const CardItem = (props) => {
  return (
    <Grid xs={4}>
      <Paper
        elevation={1}
        sx={{
          padding: "30px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
        component="div"
      >
        <Box
          component="div"
          sx={{
            width: "60px",
            height: "60px",
            bgcolor: props.bgcolor,
            borderRadius: ".25rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: props.color,
          }}
        >
          {props.icon}
        </Box>
        <Typography
          variant="p"
          sx={{
            fontWeight: "500",
            fontSize: "1.5rem",
            fontFamily: "kanit",
          }}
        >
          {props.title}
        </Typography>
        <Typography
          variant="p"
          fontFamily="kanit"
          sx={{
            fontSize: "1.2rem",
            color: "#6f809b",
          }}
        >
          {props.description}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default App;
