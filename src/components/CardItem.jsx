/* eslint-disable react/prop-types */
import {  Paper, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Fade as AweFade } from "react-awesome-reveal";
import { CardStyles } from "../styles/stylesSectionThree"; 

const CardItem = (props) => {
  return (
    <Grid xs={12} md={4}>
      <AweFade triggerOnce fraction={0.5} delay={props.delay}>
        <Paper
          elevation={0}
          sx={CardStyles.paper(props.color)}
          component="div"
        >
          <Box
            component="div"
            sx={CardStyles.icon(props.bgcolor, props.color)}
          >
            {props.icon}
          </Box>
          <Typography
            variant="p"
            sx={CardStyles.title}
          >
            {props.title}
          </Typography>
          <Typography
            variant="p"
            sx={CardStyles.description}
          >
            {props.description}
          </Typography>
        </Paper>
      </AweFade>
    </Grid>
  );
};

export default CardItem;