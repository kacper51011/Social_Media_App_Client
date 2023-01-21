import { Grid } from "@mui/material";
import { ReactNode } from "react";
import { displayedColumn } from "../pages/Main";

type Props = {
  checkVisibility: (column: displayedColumn) => "block" | "none";
  profileColumn: ReactNode;
  postsColumn: ReactNode;
  followsColumn: ReactNode;
};

const UserPageContainer = ({
  checkVisibility,
  profileColumn,
  postsColumn,
  followsColumn,
}: Props) => {
  return (
    <Grid
      spacing={7}
      minHeight="100vh"
      justifyContent="center"
      container
      direction="row"
    >
      {/* profile column */}
      <Grid
        item
        display={{ xs: checkVisibility("profile"), md: "block" }}
        xs={12}
        md={3.5}
        mt={10}
      >
        {profileColumn}
      </Grid>
      {/* posts column */}
      <Grid
        item
        display={{ xs: checkVisibility("posts"), md: "block" }}
        xs={12}
        md={5}
      >
        {postsColumn}
      </Grid>
      {/* follows column */}
      <Grid
        item
        display={{ xs: checkVisibility("follows"), md: "block" }}
        xs={10}
        md={3.5}
        mt={10}
      >
        {followsColumn}
      </Grid>
    </Grid>
  );
};

export default UserPageContainer;
