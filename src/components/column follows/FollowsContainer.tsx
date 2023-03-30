import { Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

type Props = {
  childrens?: any;
};

export const FollowsContainer = ({ childrens }: Props) => {
  const { t } = useTranslation("follows");

  return (
    <Paper
      elevation={2}
      sx={{
        width: 1,
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        p: "calc(0.5vw + 10px)",
      }}
    >
      <Typography mb={2} fontWeight="bold" variant="caption">
        {t("followList")}
      </Typography>
      {childrens}
    </Paper>
  );
};
