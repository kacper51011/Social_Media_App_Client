import { Paper, useTheme } from "@mui/material";
import { ReactElement } from "react";
import FollowedPersonItem from "./FollowedPersonItem";

type Props = {
  childrens?: ReactElement<typeof FollowedPersonItem>[];
};

const FollowsContainer = ({ childrens }: Props) => {
  const theme = useTheme();

  return <Paper sx={{ width: 1, minHeight: "40vh" }}>{childrens}</Paper>;
};

export default FollowsContainer;
