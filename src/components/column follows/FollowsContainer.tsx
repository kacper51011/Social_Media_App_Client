import { Paper, Typography, useTheme } from "@mui/material";
import { ReactElement } from "react";
import { FollowProps } from "./FollowedPersonItem";

type Props = {
  childrens?: ReactElement<FollowProps>;
};

const FollowsContainer = ({ childrens }: Props) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={5}
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
        Follows List
      </Typography>
      {childrens}
    </Paper>
  );
};

export default FollowsContainer;
