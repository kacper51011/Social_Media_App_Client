import { Routes, Route } from "react-router";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/system";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import { RootState } from "./store";
import { themeSettings } from "./utils/theme";
import Navbar from "./components/navbar/Navbar";
import Main from "./pages/Main";
import Box from "@mui/material/Box";

function App() {
  const mode = useSelector((state: RootState) => state.theme.theme);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Box>
  );
}

export default App;
