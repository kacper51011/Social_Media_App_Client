import { Routes, Route, useNavigate, Navigate } from "react-router";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./utils/theme";
import Main from "./pages/Main";
import Box from "@mui/material/Box";
import Home from "./pages/Home";
import { useAppSelector } from "./hooks/reduxHooks";
import PageProtection from "./pages/PageProtection";
import useAuth from "./hooks/useAuth";
import LoginWindow from "./components/auth/LoginWindow";
import RegisterWindow from "./components/auth/RegisterWindow";

// todo: improve routes and routing overally
// todo: improve architecture
// todo: improve image scaling (height)

function App() {
  const mode = useAppSelector((state) => state.theme.theme);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const user = useAppSelector((state) => state.auth.user?.id);

  useAuth();

  return (
    <Box overflow="hidden" mb={10}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Routes>
            <Route path="/" element={user ? <Navigate to="/main" /> : <Home />}>
              <Route index element={<LoginWindow />}></Route>
              <Route path="register" element={<RegisterWindow />}></Route>
            </Route>

            <Route path="/main" element={<PageProtection />}>
              <Route index element={<Main />}></Route>
              <Route path="/main/:id"></Route>
            </Route>
          </Routes>
        </CssBaseline>
      </ThemeProvider>
    </Box>
  );
}

export default App;
