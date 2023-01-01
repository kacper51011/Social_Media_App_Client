import { Grid } from "@mui/material";
import { useState } from "react";

type displayedColumn = "profile" | "posts" | "follows";

const Main = () => {
  const [displayedColumn, setDisplayedColumn] =
    useState<displayedColumn>("posts");

  // function for checking which one column should be displayed now and setting the visibility on mobiles (posts visible by default)
  const checkVisibility = (column: displayedColumn) => {
    return displayedColumn === column ? 12 : 0;
  };

  return (
    <Grid minHeight="100vh" width="100vw" container direction="row">
      {/* profile column */}
      <Grid item xs={checkVisibility("profile")} md={4}></Grid>
      {/* posts column */}
      <Grid item xs={checkVisibility("posts")} md={4}></Grid>
      {/* follows column */}
      <Grid item xs={checkVisibility("follows")} md={4}></Grid>
    </Grid>
  );
};

export default Main;
