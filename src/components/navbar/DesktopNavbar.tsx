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
import HomeIcon from "@mui/icons-material/Home";
import CustomIconButton from "../buttons/CustomIconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import { useDispatch } from "react-redux";
import { setMode } from "../../store/themeSlice";
import useLogout from "../../hooks/useLogout";
import { useNavigate, useParams } from "react-router";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import useScrollToTop from "../../hooks/useScrollToTop";
import { useTranslation } from "react-i18next";
import LanguageChangeButton from "../buttons/LanguageChangeButton";
import SearchIcon from "@mui/icons-material/Search";

const DesktopNavbar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const logout = useLogout();
  const navigate = useNavigate();
  let { id } = useParams();
  const { t } = useTranslation("navbar");

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

            mx: 1,
          }}
        >
          <Typography
            variant="h5"
            component="div"
            mr={5}
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              setTimeout(() => navigate("/main"), 500);
            }}
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
                title={t("scroll")}
                onClick={scrollToTop}
              />
            )}
            {/* Button navigating to main page when user is not on main page (when he checks somebody else account) */}
            {id && (
              <CustomIconButton
                sx={{ px: 3, py: 1.5 }}
                icon={<HomeIcon />}
                title={t("home")}
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  setTimeout(() => navigate("/main"), 500);
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
              title={
                theme.palette.mode === "dark" ? t("themeDark") : t("themeLight")
              }
            />

            <CustomIconButton
              sx={{ px: 3, py: 1.5 }}
              icon={<SettingsIcon />}
              title={t("settings")}
            />

            <LanguageChangeButton />

            <CustomIconButton
              sx={{ px: 3, py: 1.5 }}
              icon={<LogoutIcon />}
              title={t("logout")}
              onClick={() => logout()}
            />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default DesktopNavbar;
