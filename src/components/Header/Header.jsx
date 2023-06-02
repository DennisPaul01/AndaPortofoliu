import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const menuItems = [
    { text: "HOME", icon: null },
    { text: "PORTFOLIO", icon: null },
    { text: "ABOUT/TOOLS", icon: null },
    { text: "CV/CONTACT", icon: null },
  ];

  const theme = useTheme();

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            color: theme.palette.customColors.yellow,
            fontSize: "32px",
            fontWeight: "bold",
          }}
        >
          Anda Stefania
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={{
            display: { xs: "block", md: "none" },
            color: "#006C67",
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerClose}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={index}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "10px",
            color: "black",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          {menuItems.map((item, index) => (
            <Button
              key={index}
              color="inherit"
              sx={{ color: "black", fontSize: "16px", fontWeight: "bold" }}
            >
              {item.text}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
