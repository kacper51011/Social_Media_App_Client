import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

export const LinkToRegister = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("loginPage");
  return (
    <Typography
      sx={{
        cursor: "pointer",
      }}
      fontWeight="700"
      component="span"
      variant="subtitle1"
      textAlign="center"
      onClick={() => navigate("/register")}
      whiteSpace="nowrap"
    >
      {t("link")}
    </Typography>
  );
};
