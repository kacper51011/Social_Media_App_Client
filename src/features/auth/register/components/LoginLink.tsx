import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

export const LoginLink = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("registerPage");
  return (
    <Typography
      sx={{ cursor: "pointer" }}
      fontWeight="700"
      component="span"
      variant="subtitle1"
      textAlign="center"
      onClick={() => navigate("/login")}
      whiteSpace="nowrap"
    >
      {t("link")}
    </Typography>
  );
};
