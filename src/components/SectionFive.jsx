import { useMemo } from "react";
import { Avatar, Box, Paper, Rating, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
const dataUser = [
  {
    name: "John Doe",
    avatar: "https://avatar.iran.liara.run/public",
    rating: 2.5,
    position: "Software Engineer",
    description:
      "Experienced in developing scalable web applications and working with various backend technologies.",
  },
  {
    name: "Jane Smith",
    avatar: "https://avatar.iran.liara.run/public/1",
    rating: 4.2,
    position: "Project Manager",
    description:
      "Skilled in agile project management and leading cross-functional teams to deliver projects on time.",
  },
  {
    name: "Mike Johnson",
    avatar: "https://avatar.iran.liara.run/public/2",
    rating: 3.8,
    position: "UI/UX Designer",
    description:
      "Passionate about creating intuitive and user-friendly designs that enhance user experience.",
  },
  {
    name: "Emily Brown",
    avatar: "https://avatar.iran.liara.run/public/3",
    rating: 5.0,
    position: "Data Scientist",
    description:
      "Expert in data analysis, machine learning, and statistical modeling to drive business insights.",
  },
  {
    name: "Alex Wilson",
    avatar: "https://avatar.iran.liara.run/public/4",
    rating: 3.5,
    position: "DevOps Engineer",
    description:
      "Proficient in automating and optimizing mission-critical deployments in the cloud, ensuring high availability.",
  },
];
export default function SectionFive() {
  const slides = useMemo(() => {
    return dataUser.map((user, index) => (
      <SwiperSlide key={index}>
        <div
          style={{
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontSize: "2.5rem",
              fontFamily: "kanit",
              color: "#6f809b",
            }}
          >
            {user.position}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "black",
              fontSize: "22px",
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            {user.description}
          </Typography>
          <Stack
            spacing={1}
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <Avatar
              sx={{ width: 50, height: 50 }}
              src={user.avatar}
              component={"div"}
            />
            <Typography
              variant="h5"
              sx={{
                color: "black",
                fontSize: "1.2rem",
                fontFamily: "kanit",
                textTransform: "uppercase",
              }}
            >
              - {user.name}
            </Typography>
            <Rating
              name="half-rating-read"
              defaultValue={user.rating}
              precision={0.5}
              readOnly
            />
          </Stack>
        </div>
      </SwiperSlide>
    ));
  }, []);

  return (
    <Box
      component="div"
      sx={{
        backgroundImage: "linear-gradient(180deg, #f9fbfd 0, #fff)",
        paddingY: { xs: 2, lg: 5 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 5px",
      }}
    >
      <Paper
        component="div"
        sx={{
          padding: { xs: 5, lg: "48px 95px" },
          boxSizing: "border-box",
          maxWidth: "lg",
          width: "100%",
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          position: "relative",
        }}
      >
        <Swiper
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          speed={1100}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {slides}
        </Swiper>
        <Box
          component="div"
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingX: { xs: 0, lg: 5 },
            boxSizing: "border-box",
          }}
        >
          <div className="swiper-button-prev-custom">
            <ArrowBackIosNew />
          </div>
          <div className="swiper-button-next-custom">
            <ArrowForwardIos />
          </div>
        </Box>
      </Paper>
    </Box>
  );
}
