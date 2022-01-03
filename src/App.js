import logo from "./logo.svg";
import "./App.css";
import { Home } from "./pages/Home";
import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

function App() {
  const theme = createTheme({
    palette: {
      primary: { main: "#333" },
    },
    typography: {
      fontFamily: "Fira Code, Arial",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
