import { Paper, useTheme } from "@mui/material";
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
        alignItems: "center",
        p: "calc(0.5vw + 10px)",
      }}
    >
      {childrens}
    </Paper>
  );
};

export default FollowsContainer;
