import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { CustomIconButton } from "@components";
import { useTheme } from "@mui/material";
import { setMode } from "@store";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

export const ColorModeButton = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { t } = useTranslation("navbar");

  const toggleMode = () => {
    dispatch(setMode());
  };
  return (
    <CustomIconButton
      sx={{ px: 3, py: 1.5 }}
      onClick={() => toggleMode()}
      icon={
        theme.palette.mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />
      }
      title={theme.palette.mode === "dark" ? t("themeDark") : t("themeLight")}
    />
  );
};
