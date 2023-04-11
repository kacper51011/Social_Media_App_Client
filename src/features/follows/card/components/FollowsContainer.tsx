import { Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { cardContainerStyle } from "./styles";
import { PropsWithChildren } from "react";

export const FollowsContainer = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation("follows");

  return (
    <Paper {...cardContainerStyle}>
      <Typography component="h5" mb={2} fontWeight="bold" variant="caption">
        {t("followList")}
      </Typography>
      {children}
    </Paper>
  );
};
