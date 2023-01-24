import { Box, Paper, Typography } from "@mui/material";
import { ReactNode } from "react";

import { FollowProps } from "./FollowedPersonItem";

type Props = {
  childrens?: any;
};

const FollowsContainer = ({ childrens }: Props) => {
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
        Follows List
      </Typography>
      {childrens}
    </Paper>
  );
};

export default FollowsContainer;
