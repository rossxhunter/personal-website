import logo from "./logo.svg";
import "./App.css";
import { Home } from "./pages/Home";
import { createTheme, CssBaseline, responsiveFontSizes } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import React, { useEffect, useState } from "react";

function App() {
  let theme = createTheme({
    palette: {
      primary: { main: "#333" },
    },
    typography: {
      fontFamily: "Montserrat, Arial",
    },
  });

  theme = responsiveFontSizes(theme);

  useEffect(() => {
    document.title = "Ross Hunter";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
