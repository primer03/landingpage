/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, memo } from "react";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Button,
  Drawer,
  List,
  Typography,
  useTheme,
  useMediaQuery,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const pinkcolor = pink;

const DynamicAppBar = memo(function DynamicAppBar({ isTop }) {
  console.log(isTop);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const MenuItems = ({ isMobile }) => (
    <>
      {menuItems.map((item) =>
        isMobile ? (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                backgroundColor: "white",
                color: pinkcolor[500],
                "&:hover": {
                  backgroundColor: pinkcolor[100],
                  color: pinkcolor[700],
                },
                transition: "background-color 0.3s, color 0.3s",
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ) : (
          <Button
            key={item}
            sx={{
              color: !isTop ? pinkcolor[500] : "white",
              "&:hover": {
                backgroundColor: !isTop ? pinkcolor[100] : pinkcolor[400],
                color: !isTop ? pinkcolor[700] : "white",
              },
              transition: "background-color 0.3s, color 0.3s",
            }}
          >
            {item}
          </Button>
        )
      )}
    </>
  );

  return (
    <AppBar
      elevation={isTop ? 0 : 4}
      sx={{
        position: "fixed",
        top: 0,
        backgroundColor: !isTop ? "white" : pinkcolor[500],
        color: !isTop ? pinkcolor[500] : "white",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: isTop ? 1 : 0.5,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={
                isTop ? "batman-icon-png-25.png" : "batman-icon-png-25pink.png"
              }
              alt="logo"
              style={{
                width: isTop ? "80px" : "60px",
                height: "auto",
                transition: "all 0.3s ease-in-out",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                ml: 2,
                fontWeight: "bold",
                display: { xs: "none", sm: "block" },
                color: !isTop ? pinkcolor[500] : "white",
                transition: "color 0.3s ease-in-out",
              }}
            >
              Your Brand
            </Typography>
          </Box>
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              <MenuItems isMobile={false} />
            </Box>
          )}
          {isMobile && (
            <IconButton
              size="large"
              onClick={toggleDrawer(true)}
              sx={{
                color: !isTop ? pinkcolor[500] : "white",
                transition: "color 0.3s ease-in-out",
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Container>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "white",
            color: pinkcolor[500],
          },
        }}
      >
        <Box sx={{ width: 250 }} role="presentation">
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
            <IconButton
              onClick={toggleDrawer(false)}
              sx={{
                color: pinkcolor[500],
                "&:hover": {
                  backgroundColor: pinkcolor[50],
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            <MenuItems isMobile={true} />
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
});

export default DynamicAppBar;
