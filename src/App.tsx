import { Routes, Route } from "react-router";
import { useMemo } from "react";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/system";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import { RootState } from "./store";
import { themeSettings } from "./utils/theme";

function App() {
  const mode = useSelector((state: RootState) => state.theme.theme);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
