import { Routes, Route, useNavigate } from "react-router";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { themeSettings } from "./utils/theme";
import Main from "./pages/Main";
import Box from "@mui/material/Box";
import Home from "./pages/Home";
import { useAppSelector } from "./hooks/reduxHooks";

import PageProtection from "./pages/PageProtection";
import useAuth from "./hooks/useAuth";

function App() {
  const mode = useSelector((state: RootState) => state.theme.theme);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const user = useAppSelector((state) => state.auth.user);
  useAuth();

  return (
    <Box overflow="hidden" mb={10}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Routes>
            <Route path="/" element={!user ? <Home /> : <Main />} />
            <Route element={<PageProtection />}>
              <Route path="main" element={<Main />}></Route>
            </Route>
          </Routes>
        </CssBaseline>
      </ThemeProvider>
    </Box>
  );
}

export default App;
