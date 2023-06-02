import React from "react";
import { Grid, Box } from "@mui/material";

const AngryGrid = () => {
  const itemStyle = {
    borderRadius: "30px",
    alignItems: "center",
    justifyContent: "center",
  };

  const item0Style = {
    height: "500px",
    backgroundColor: "#FD565E",
  };

  const item1Style = {
    height: "500px",
    backgroundColor: "#7B7B7D",
  };

  const item2Style = {
    height: "500px",
    backgroundColor: "#DDA59D",
  };

  const item3Style = {
    height: "500px",
    backgroundColor: "#955DCD",
  };

  return (
    <Grid container>
      <Grid item xs={12} md={4} lg={4} sx={{ p: 1 }}>
        <Box sx={{ ...itemStyle, ...item0Style }} />
      </Grid>
      <Grid item xs={12} md={8} lg={8} sx={{ p: 1 }}>
        <Box sx={{ ...itemStyle, ...item1Style }} />
      </Grid>
      <Grid item xs={12} md={8} lg={8} sx={{ p: 1 }}>
        <Box sx={{ ...itemStyle, ...item2Style }} />
      </Grid>
      <Grid item xs={12} md={4} lg={4} sx={{ p: 1 }}>
        <Box sx={{ ...itemStyle, ...item3Style }} />
      </Grid>
    </Grid>
  );
};

export default AngryGrid;
