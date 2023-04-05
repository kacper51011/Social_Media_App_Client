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
import { CustomIconButton } from "../../shared/components/CustomIconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import { useDispatch } from "react-redux";
import { setMode } from "../../store/themeSlice";
import { useLogout } from "../../features/auth/hooks/useLogout";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { LanguageChangeButton } from "../../shared/components/LanguageChangeButton";

export const DesktopNavbar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const logout = useLogout();
  const navigate = useNavigate();
  const { t } = useTranslation("navbar");

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
            component="h1"
            mr={5}
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              setTimeout(() => navigate("/"), 500);
            }}
            fontWeight="500"
            sx={{ cursor: "pointer" }}
            color={theme.palette.neutral.dark}
          >
            SocialMediaApp
          </Typography>

          {/* scroll to Top button */}
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
