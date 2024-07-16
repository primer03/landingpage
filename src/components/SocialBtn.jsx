/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Button } from '@mui/material'
export default function SocialBtn({children,color}) {
  return (
    <Button variant="outlined" sx={{
        padding: "0px",
        margin: "auto",
        minWidth: "unset",
        borderColor: "grey.500",
        color: "grey.500",
        "&.MuiButton-root": {
          height: "40px",
          width: "40px",
          borderRadius: "50%",
        },
        "&:hover": {
          color: color,
          borderColor: color,
        },
      }}>
        {children}
      </Button>
  )
}
