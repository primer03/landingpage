/* eslint-disable react/prop-types */
import { Box, Stack, Typography,styled,Paper } from "@mui/material";
import SocialBtn from "./SocialBtn";
import { GitHub, Google, LinkedIn, Twitter } from "@mui/icons-material";
import { pink } from "@mui/material/colors";
import { keyframes } from "@mui/material";
import {
  Zoom as AweZoom,
  Fade as AweFade,
  Slide as AweSlide,
} from "react-awesome-reveal";
const InfoItem = styled(Paper)(() => ({
  backgroundColor: "#fff",
  padding: "1rem",
  textAlign: "center",
  width: "100%",
}));
const InfoItemDetail = (props) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      width="100%"
      justifyContent="start"
      alignItems="center"
    >
      <Typography
        flex={1.5}
        variant="p"
        fontWeight="bold"
        textAlign="start"
        fontFamily="Helvetica"
        fontSize={{ xs: "1rem", md: "1.2rem" }}
      >
        {props.title}
      </Typography>
      <Typography variant="h6" textAlign="start">
        :
      </Typography>
      <Typography
        flex={2}
        color="#7081b9;"
        variant="p"
        textAlign="start"
        fontFamily="Helvetica"
        fontSize={{ xs: "1rem", md: "1.2rem" }}
      >
        {props.value}
      </Typography>
    </Stack>
  );
};
export default function SectionTwo() {
  return (
    <Box
      id="section2"
      component="div"
      width="100%"
      height="auto"
      maxWidth="xl"
      display="flex"
      flexDirection="column"
      overflow="auto"
      sx={{
        marginX: "auto",
        paddingX: { xs: 2, md: 4 },
        paddingTop: { xs: 8, md: 6 },
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={0}
        alignItems="start"
        justifyContent="center"
      >
        <Box>
          <Stack direction="column" spacing={2}>
            <Box
              component="mark"
              sx={{
                backgroundColor: "transparent",
                backgroundImage: `linear-gradient(180deg, ${pink[200]}, ${pink[400]}) `,
                backgroundPosition: "0 80%",
                backgroundSize: "auto 0.80em",
                backgroundRepeat: "no-repeat",
                position: "relative",
                alignSelf: "start",
              }}
            >
              <AweFade triggerOnce>
                <Typography variant="h4" fontWeight="bold">
                  Personal Detail
                </Typography>
              </AweFade>
            </Box>
            <AweFade triggerOnce delay={500} duration={500} fraction={0.5}>
              <Typography variant="h6" textAlign="start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur exercitationem, impedit labore illo quasi iste eius et
                animi ad expedita doloribus vero! Explicabo nesciunt officiis,
                error nisi eum beatae tempore!
              </Typography>
            </AweFade>
            <Stack direction="row" spacing={1}>
              <AweZoom
                cascade
                triggerOnce
                duration={500}
                delay={600}
                damping={0.2}
                fraction={0.5}
              >
                <SocialBtn color="#161c2d">
                  <GitHub />
                </SocialBtn>
                <SocialBtn color="#00bcd4">
                  <Twitter />
                </SocialBtn>
                <SocialBtn color="#ef4d56">
                  <Google />
                </SocialBtn>
                <SocialBtn color="#377dff">
                  <LinkedIn />
                </SocialBtn>
              </AweZoom>
            </Stack>
          </Stack>
        </Box>
        <InfoItem
          sx={{
            boxSizing: "border-box",
            marginTop: { xs: 0, md: 5 },
          }}
          elevation={0}
        >
          <Stack direction="column" spacing={2}>
            <AweSlide
              triggerOnce
              direction="right"
              damping={0.2}
              cascade
              keyframes={keyframes`
                0% {
                  transform: translateX(150%);
                }
                100% {
                  transform: translateX(0%);
                }
              `}
            >
              <InfoItemDetail title="Date of birth" value="06 june 1989" />
              <InfoItemDetail
                title="Spoken Languages"
                value="English - French - German"
              />
              <InfoItemDetail title="Nationality" value="Thailand" />
              <InfoItemDetail
                title="Interest"
                value="Music, Reading, journey"
              />
            </AweSlide>
          </Stack>
        </InfoItem>
      </Stack>
    </Box>
  );
}
