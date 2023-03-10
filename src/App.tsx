import { Routes, Route, Navigate } from "react-router";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./utils/theme";
import Main from "./pages/Main";
import Box from "@mui/material/Box";
import Home from "./pages/Home";
import { useAppSelector } from "./hooks/reduxHooks";
import useAuth from "./hooks/useAuth";
import LoginWindow from "./components/auth/LoginWindow";
import RegisterWindow from "./components/auth/RegisterWindow";
import OtherUserPage from "./pages/OtherUserPage";
import AuthUserPage from "./pages/AuthUserPage";
import PageNotFound from "./pages/PageNotFound";

// todo: improve architecture
// Wysrodkowac pionowo sekcje logowania i rejestracji

// Routing

// Zmienic routing profilowy na /profile/:id

function App() {
  const mode = useAppSelector((state) => state.theme?.theme);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const user = useAppSelector((state) => state.auth.user?.id);

  useAuth();

  return (
    <Box overflow="hidden">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Routes>
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Home />}
            >
              <Route index element={<LoginWindow />}></Route>
            </Route>

            <Route
              path="/register"
              element={user ? <Navigate to="/" /> : <Home />}
            >
              <Route index element={<RegisterWindow />}></Route>
            </Route>

            <Route
              path="/"
              element={user ? <Main /> : <Navigate to="/login" />}
            >
              <Route index element={<AuthUserPage />}></Route>
              <Route path="profile/:id" element={<OtherUserPage />}></Route>
            </Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </CssBaseline>
      </ThemeProvider>
    </Box>
  );
}

export default App;
