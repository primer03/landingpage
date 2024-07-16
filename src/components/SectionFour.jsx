/* eslint-disable react/prop-types */
// import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import { Box, Divider, Stack, Typography, styled } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Add, Remove } from "@mui/icons-material";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => {
  const { expanded, ...other } = props;
  return (
    <MuiAccordionSummary
      expandIcon={
        expanded ? (
          <Remove sx={{ fontSize: "1.5rem", color: "#00bcd4" }} />
        ) : (
          <Add sx={{ fontSize: "1.5rem", color: "#00bcd4" }} />
        )
      }
      {...other}
    />
  );
})(({ theme }) => ({
  padding: theme.spacing(1.5),
  borderBottom: "1px solid rgba(0, 0, 0, .125)",
  borderStyle: "dashed",
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "white",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(0deg)", // ไม่หมุนไอคอนเมื่อขยาย
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  backgroundColor: "#f9fbfd",
}));
export default function SectionFour() {
  const [expandedEducation, setExpandedEducation] = useState("panel1");
  const [expandedExperience, setExpandedExperience] = useState(false);

  const handleChangeEducation = (panel) => (event, newExpanded) => {
    setExpandedEducation(newExpanded ? panel : false);
  };

  const handleChangeExperience = (panel) => (event, newExpanded) => {
    setExpandedExperience(newExpanded ? panel : false);
  };
  return (
    <>
      <Box component="div">
        <Box
          maxWidth="xl"
          sx={{
            width: "100%",
            paddingY: "6rem",
            marginX: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            direction="column"
            spacing={1}
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
              LIFE TIME
            </Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              Education & Experience
            </Typography>
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
            <Box component="div" padding={1}>
              <Stack direction={{ xs: "column", md: "row" }} spacing={0}>
                <Box
                  sx={{
                    padding: "6rem",
                    backgroundColor: "#f9fbfd",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src="school.png"
                    alt="school"
                    width="150px"
                  ></Box>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <MyAccordion
                    expanded={expandedEducation}
                    handleChange={handleChangeEducation}
                    expandednNumber="panel1"
                    title="MSc IT Master Degree"
                    year="2010 - 2012"
                  >
                    <Typography fontSize="1.3rem" color="#6f809b">
                      Harvard University is an educational institution that
                      offers graduate, professional, and research programs in
                      the fields of and public health.
                    </Typography>
                    <Typography variant="h4" fontFamily="kanit">
                      Harvard University,
                    </Typography>
                  </MyAccordion>
                  <MyAccordion
                    expanded={expandedEducation}
                    handleChange={handleChangeEducation}
                    expandedNumber="panel2"
                    title="BCA college complete course"
                    year="2007 - 2010"
                  >
                    <Typography fontSize="1.3rem" color="#6f809b">
                      Columbia University is an educational institution that
                      offers graduate, professional, and research programs in
                      the fields of and public health.
                    </Typography>
                    <Typography variant="h5" fontFamily="kanit">
                      Columbia University, New York, NY, United States
                    </Typography>
                  </MyAccordion>
                  <MyAccordion
                    expanded={expandedEducation}
                    handleChange={handleChangeEducation}
                    expandedNumber="panel3"
                    title="High / Higher secondary school"
                    year="1999 - 2007"
                  >
                    <Typography fontSize="1.3rem" color="#6f809b">
                      Princeton University is an educational institution that
                      offers graduate, professional, and research programs in
                      the fields of and public health.
                    </Typography>
                    <Typography variant="h5" fontFamily="kanit">
                      Princeton University, Princeton, NJ, United States
                    </Typography>
                  </MyAccordion>
                </Box>
              </Stack>
            </Box>
          </>
          <Divider
            orientation="horizontal"
            flexItem
            sx={{
              width: "100%",
              height: "1px",
              borderStyle: "dashed",
            }}
          />
          <>
            <Box component="div" padding={1}>
              <Stack direction={{ xs: "column", md: "row" }} spacing={0}>
                <Box
                  sx={{
                    padding: "6rem",
                    backgroundColor: "#f9fbfd",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src="school.png"
                    alt="school"
                    width="150px"
                  ></Box>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <MyAccordion
                    expanded={expandedExperience}
                    handleChange={handleChangeExperience}
                    expandednNumber="panel4"
                    title="MSc IT Master Degree"
                    year="2010 - 2012"
                  >
                    <Typography fontSize="1.3rem" color="#6f809b">
                      Harvard University is an educational institution that
                      offers graduate, professional, and research programs in
                      the fields of and public health.
                    </Typography>
                    <Typography variant="h4" fontFamily="kanit">
                      Harvard University,
                    </Typography>
                  </MyAccordion>
                  <MyAccordion
                    expanded={expandedExperience}
                    handleChange={handleChangeExperience}
                    expandedNumber="panel5"
                    title="BCA college complete course"
                    year="2007 - 2010"
                  >
                    <Typography fontSize="1.3rem" color="#6f809b">
                      Columbia University is an educational institution that
                      offers graduate, professional, and research programs in
                      the fields of and public health.
                    </Typography>
                    <Typography variant="h5" fontFamily="kanit">
                      Columbia University, New York, NY, United States
                    </Typography>
                  </MyAccordion>
                  <MyAccordion
                    expanded={expandedExperience}
                    handleChange={handleChangeExperience}
                    expandedNumber="panel6"
                    title="High / Higher secondary school"
                    year="1999 - 2007"
                  >
                    <Typography fontSize="1.3rem" color="#6f809b">
                      Princeton University is an educational institution that
                      offers graduate, professional, and research programs in
                      the fields of and public health.
                    </Typography>
                    <Typography variant="h5" fontFamily="kanit">
                      Princeton University, Princeton, NJ, United States
                    </Typography>
                  </MyAccordion>
                </Box>
              </Stack>
            </Box>
          </>
        </Box>
      </Box>
    </>
  );
}

// eslint-disable-next-line no-unused-vars
const MyAccordion = (props) => {
  const { expanded, handleChange, expandedNumber, title, year, children } =
    props;
  return (
    <Accordion
      expanded={expanded === expandedNumber}
      onChange={handleChange(expandedNumber)}
    >
      <AccordionSummary
        aria-controls={`${expandedNumber}-content`}
        id={`${expandedNumber}-header`}
        expanded={expanded === expandedNumber}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography>{title}</Typography>
          <Typography color="#00bcd4">{year}</Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Stack direction="column" spacing={2}>
          {children}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};
