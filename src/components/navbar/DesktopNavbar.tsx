import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Stack,
  useTheme,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LogoutIcon from "@mui/icons-material/Logout";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import CustomIconButton from "../buttons/CustomIconButton";
import { useDispatch } from "react-redux";

import { setMode } from "../../store/themeSlice";
import useLogout from "../../hooks/useLogout";
import { useNavigate } from "react-router";

const DesktopNavbar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const logout = useLogout();
  const navigate = useNavigate();

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
          <Typography
            variant="h5"
            component="div"
            onClick={() => navigate("/main")}
            sx={{ cursor: "pointer" }}
            color={theme.palette.neutral.main}
          >
            SocialMediaApp
          </Typography>
          <Stack direction="row" minWidth="15%" justifyContent="space-between">
            <CustomIconButton
              sx={{ px: 3, py: 1.5 }}
              onClick={() => toggleMode()}
              icon={
                theme.palette.mode === "dark" ? (
                  <DarkModeIcon />
                ) : (
                  <LightModeIcon />
                )
              }
              title={theme.palette.mode === "dark" ? "dark mode" : "light mode"}
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
              onClick={() => logout()}
            />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default DesktopNavbar;
