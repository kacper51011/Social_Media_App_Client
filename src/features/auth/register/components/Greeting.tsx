import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Greeting = () => {
  const { t } = useTranslation("registerPage");
  return (
    <Typography textAlign="center" fontWeight="bold" variant="h4">
      {t("greeting")}
    </Typography>
  );
};
