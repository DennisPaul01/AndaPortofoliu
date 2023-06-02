import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Quicksand, sans-serif",
  },
  palette: {
    customColors: {
      yellow: "#FFB100",
      green: "#006C67",
      color3: "#9883E5",
      color4: "#F42C04",
      color5: "#5692EA",
      color6: "#E75A7C",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
