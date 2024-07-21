import Grid from "@mui/material/Unstable_Grid2";
import { Box, Stack, Typography } from "@mui/material";
import { AttachMoney, Layers, TaskAlt } from "@mui/icons-material";
import { AttentionSeeker } from "react-awesome-reveal";
import CardItem from './CardItem';
import { SectionStylesThree,TitleStyles } from "../styles/stylesSectionThree";

export default function SectionThree() {
  return (
    <Box component="div" sx={SectionStylesThree.container}>
      <Box maxWidth="xl" sx={SectionStylesThree.content}>
        <Stack
          direction="column"
          spacing={0}
          alignItems="center"
          justifyContent="center"
          maxWidth="sm"
        >
          <Box component="span" sx={SectionStylesThree.serviceTag}>
            Services
          </Box>
          <Box component="div" sx={SectionStylesThree.titleContainer}>
            <Typography variant="h1" sx={TitleStyles.background}>
              Services
            </Typography>
            <Box component="div" sx={TitleStyles.foreground}>
              <AttentionSeeker effect="swing">
                <Typography variant="h3" sx={TitleStyles.text}>
                  Our Services
                </Typography>
              </AttentionSeeker>
            </Box>
          </Box>
          <Typography variant="p" sx={SectionStylesThree.description}>
            We craft digital, graphic and dimensional thinking, to create
            category leading brand experiences that have meaning .
          </Typography>
        </Stack>
        <Grid container spacing={4} width="100%">
          <CardItem
            color="#f78c4b"
            bgcolor="rgba(247, 140, 75, 0.1)"
            title="Awesome Support"
            delay={200}
            icon={<Layers sx={{ height: "30px", width: "30px" }} />}
            description="Some quick example text to build on the card title and make up the bulk of the card's content platform."
          />
          <CardItem
            color="#377dff"
            bgcolor="rgba(55, 125, 255, 0.1)"
            title="Dynamic Growth"
            delay={400}
            icon={<AttachMoney sx={{ height: "30px", width: "30px" }} />}
            description="Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt."
          />
          <CardItem
            color="#69c380"
            bgcolor="rgba(105, 195, 128, 0.1)"
            title="Dynamic Growth"
            delay={600}
            icon={<TaskAlt sx={{ height: "30px", width: "30px" }} />}
            description="Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt."
          />
        </Grid>
      </Box>
    </Box>
  );
}