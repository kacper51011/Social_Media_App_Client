import { useMemo } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./utils/theme";
import Box from "@mui/material/Box";
import { useAppSelector } from "@hooks";

import { AppRoutes } from "./routes";
// todo: improve architecture
// Wysrodkowac pionowo sekcje logowania i rejestracji
// Routing
// Zmienic routing profilowy na /profile/:id
export function App() {
  const mode = useAppSelector((state) => state.theme?.theme);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <Box role="application" overflow="hidden">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <AppRoutes />
        </CssBaseline>
      </ThemeProvider>
    </Box>
  );
}
