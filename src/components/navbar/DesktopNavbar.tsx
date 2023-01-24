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
import HomeIcon from "@mui/icons-material/Home";
import CustomIconButton from "../buttons/CustomIconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import { useDispatch } from "react-redux";
import { setMode } from "../../store/themeSlice";
import useLogout from "../../hooks/useLogout";
import { useNavigate, useParams } from "react-router";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import useScrollToTop from "../../hooks/useScrollToTop";

const DesktopNavbar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const logout = useLogout();
  const navigate = useNavigate();
  let { id } = useParams();

  const [visible, scrollToTop] = useScrollToTop();

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
      <AppBar color="inherit">
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
            fontWeight="500"
            sx={{ cursor: "pointer" }}
            color={theme.palette.neutral.dark}
          >
            SocialMediaApp
          </Typography>
          {/* scroll to Top button */}
          <Stack direction="row" minWidth="15%" justifyContent="space-between">
            {visible && (
              <CustomIconButton
                sx={{ px: 3, py: 1.5 }}
                icon={<ArrowUpwardIcon />}
                title="scroll to top"
                onClick={scrollToTop}
              />
            )}
            {/* Button navigating to main page when user is not on main page (when he checks somebody else account) */}
            {id && (
              <CustomIconButton
                sx={{ px: 3, py: 1.5 }}
                icon={<HomeIcon />}
                title="home board"
                onClick={() => {
                  navigate("/main");
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              />
            )}
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
              icon={<SettingsIcon />}
              title="settings"
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
