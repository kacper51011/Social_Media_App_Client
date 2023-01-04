import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LogoutIcon from "@mui/icons-material/Logout";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { useState } from "react";
import CustomIconButton from "../buttons/CustomIconButton";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setMode } from "../../store/themeSlice";

const DesktopNavbar = () => {
  const [darkMode, toggleDarkMode] = useState(false);
  const theme = useTheme();
  const dispatch = useDispatch();

  const toggleMode = () => {
    dispatch(setMode());
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: 1,
        backgroundColor: theme.palette.secondary.dark,
      }}
    >
      <AppBar color="inherit" position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">SocialMediaApp</Typography>
          <Stack direction="row" minWidth="15%" justifyContent="space-between">
            <CustomIconButton
              sx={{ px: 3, py: 1.5 }}
              onClick={() => toggleMode()}
              icon={darkMode ? <DarkModeIcon /> : <LightModeIcon />}
              title={darkMode ? "dark mode" : "light mode"}
            />
            <CustomIconButton
              sx={{ px: 3, py: 1.5 }}
              icon={<SmartToyIcon />}
              title="voice helper"
            />
            <CustomIconButton
              sx={{ px: 3, py: 1.5 }}
              icon={<LogoutIcon />}
              title="logout"
            />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default DesktopNavbar;
