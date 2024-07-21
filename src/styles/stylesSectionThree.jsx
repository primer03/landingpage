export const SectionStylesThree = {
  container: {
    backgroundImage: "linear-gradient(180deg, #f9fbfd 0, #fff);",
  },
  content: {
    width: "100%",
    paddingY: "6rem",
    marginX: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "5rem",
    justifyContent: "center",
    alignItems: "center",
  },
  serviceTag: {
    textTransform: "uppercase",
    fontFamily: "kanit",
    backgroundColor: "rgba(105, 195, 128, 0.1);",
    color: "#69c380",
    padding: "7px 14px",
    fontSize: "13px",
    borderRadius: ".25rem",
  },
  titleContainer: {
    position: "relative",
  },
  description: {
    color: "#6f809b",
    fontFamily: "kanit",
    textAlign: "center",
    fontSize: "18px",
    lineHeight: "2",
  },
};

export const TitleStyles = {
  background: {
    color: "#f1f6fa",
    fontFamily: "kanit",
    fontWeight: "bold",
    lineHeight: "0.8",
    display: "inline-block",
  },
  foreground: {
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
  },
  text: {
    fontSize: "2.5rem",
  },
};

export const CardStyles = {
  paper: (color) => ({
    padding: "30px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    borderRadius: "16px",
    background: `linear-gradient(145deg, #ffffff, #f0f0f0)`,
    boxShadow: "8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-10px) scale(1.02)",
      boxShadow: `12px 12px 20px #d1d1d1, -12px -12px 20px #ffffff, 0 10px 10px -5px ${color}`,
    },
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: "16px",
      background: `linear-gradient(45deg, transparent, ${color}22)`,
      opacity: 0,
      transition: "opacity 0.3s ease-in-out",
    },
    "&:hover::before": {
      opacity: 1,
    },
  }),
  icon: (bgcolor, color) => ({
    width: "60px",
    height: "60px",
    bgcolor: bgcolor,
    borderRadius: ".25rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: color,
  }),
  title: {
    fontWeight: "500",
    fontSize: "1.5rem",
    fontFamily: "kanit",
  },
  description: {
    fontSize: "1.2rem",
    color: "#6f809b",
    fontFamily: "kanit",
  },
};
