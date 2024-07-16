/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { memo, useEffect } from 'react';
import { Box } from "@mui/material";

const MyAvatar = memo(function MyAvatar() {
  console.log("render");
  return (
    <Box
      component="img"
      src="render.png"
      alt="render"
      width={{ xs: "80%", sm: "70%", md: "auto" }}
      height={{ xs: "100%", md: "100%" }}
      sx={{
        objectFit: { xs: "scale-down", md: "scale-down" },
        aspectRatio: "1/1",
        alignSelf: "center",
      }}
    />
  );
});

export default MyAvatar;