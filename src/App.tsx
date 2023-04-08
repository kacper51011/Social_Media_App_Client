import { useMemo } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./utils/theme";
import Box from "@mui/material/Box";
import { AppRoutes } from "./routes";
import { useAppSelector } from "@hooks";
import { useAuth } from "./features/auth";

export function App() {
  const mode = useAppSelector((state) => state.theme?.theme);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  useAuth();

  return (
    <Box overflow="hidden">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <AppRoutes />
        </CssBaseline>
      </ThemeProvider>
    </Box>
  );
}
