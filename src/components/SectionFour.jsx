/* eslint-disable react/prop-types */
import React, { useState, useMemo, useCallback } from "react";
import { Box, Divider, Stack, Typography, styled } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
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
    transform: "rotate(0deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  backgroundColor: "#f9fbfd",
  width: "100%",
  boxSizing: "border-box",
}));

const MyAccordion = ({
  expanded,
  handleChange,
  expandedNumber,
  title,
  year,
  children,
}) => {
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

const MemoizedMyAccordion = React.memo(MyAccordion);

export default function SectionFour() {
  const [expandedEducation, setExpandedEducation] = useState("panel1");
  const [expandedExperience, setExpandedExperience] = useState(false);

  const handleChangeEducation = useCallback(
    (panel) => (event, newExpanded) => {
      setExpandedEducation(newExpanded ? panel : false);
    },
    []
  );

  const handleChangeExperience = useCallback(
    (panel) => (event, newExpanded) => {
      setExpandedExperience(newExpanded ? panel : false);
    },
    []
  );

  const educationData = useMemo(
    () => [
      {
        expandedNumber: "panel1",
        title: "MSc IT Master Degree",
        year: "2010 - 2012",
        description:
          "Harvard University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.",
        institution: "Harvard University",
      },
      {
        expandedNumber: "panel2",
        title: "BCA college complete course",
        year: "2007 - 2010",
        description:
          "Columbia University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.",
        institution: "Columbia University, New York, NY, United States",
      },
      {
        expandedNumber: "panel3",
        title: "High / Higher secondary school",
        year: "1999 - 2007",
        description:
          "Princeton University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.",
        institution: "Princeton University, Princeton, NJ, United States",
      },
    ],
    []
  );

  const experienceData = useMemo(
    () => [
      {
        expandedNumber: "panel4",
        title: "Senior UX/UI Designer",
        year: "2019 - Present",
        description:
          "Worked on various projects involving user experience design and interface development.",
        institution: "Tech Innovations Inc., San Francisco, CA",
      },
      {
        expandedNumber: "panel5",
        title: "Junior Web Developer",
        year: "2016 - 2019",
        description:
          "Developed and maintained web applications using modern frameworks and technologies.",
        institution: "WebSolutions Co., New York, NY",
      },
      {
        expandedNumber: "panel6",
        title: "Intern - Graphic Design",
        year: "2015 - 2016",
        description:
          "Assisted in creating visual designs for various marketing materials and digital platforms.",
        institution: "Creative Minds Agency, Boston, MA",
      },
    ],
    []
  );

  const renderSection = (data, expanded, handleChange, imageSrc) => (
    <Box component="div" padding={1} width="100%">
      <Stack direction={{ xs: "column", md: "row" }} spacing={0}>
        <Box
          sx={{
            padding: "6rem",
            backgroundColor: "#f9fbfd",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "100%", md: "20%" },
            boxSizing: "border-box",
          }}
        >
          <Box
            component="img"
            src={imageSrc}
            alt="icon"
            boxSizing={"border-box"}
            sx={{ width: "150px", height: "auto" }}
          />
        </Box>
        <Box sx={{ width: { xs: "100%", md: "70%" } }}>
          {data.map((item) => (
            <MemoizedMyAccordion
              key={item.expandedNumber}
              expanded={expanded}
              handleChange={handleChange}
              expandedNumber={item.expandedNumber}
              title={item.title}
              year={item.year}
            >
              <Typography fontSize="1.3rem" color="#6f809b">
                {item.description}
              </Typography>
              <Typography variant="h5" fontFamily="kanit">
                {item.institution}
              </Typography>
            </MemoizedMyAccordion>
          ))}
        </Box>
      </Stack>
    </Box>
  );

  return (
    <Box
      component="div"
      sx={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        maxWidth="xl"
        sx={{
          width: "100%",
          paddingTop: "6rem",
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
            category leading brand experiences that have meaning.
          </Typography>
        </Stack>

        {renderSection(
          educationData,
          expandedEducation,
          handleChangeEducation,
          "school.png"
        )}

        <Divider
          orientation="horizontal"
          flexItem
          sx={{
            width: "100%",
            height: "1px",
            borderStyle: "dashed",
          }}
        />

        {renderSection(
          experienceData,
          expandedExperience,
          handleChangeExperience,
          "job.png"
        )}
      </Box>
      <Box sx={{
        width: "100%",
        height: "100px",
        backgroundColor: "#f9fbfd",
        position:"relative",
        overflow: "hidden",
      }}>
        <Box
        sx={{
          position: "absolute",
          width: "150%",
          height: "190%",
          backgroundColor: "white",
          top: "-110%",
          left: "-20%",
          transform: "rotate(-4deg)",
          borderRadius: "50%",
        }}
        ></Box>
      </Box>
    </Box>
  );
}
