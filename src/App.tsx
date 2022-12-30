import { Routes, Route } from "react-router";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
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
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ThemeProvider>
      </CssBaseline>
    </div>
  );
}

export default App;
