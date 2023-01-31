import { Grid } from "@mui/material";
import { ReactNode } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";

type Props = {
  profileColumn: ReactNode;
  postsColumn: ReactNode;
  followsColumn: ReactNode;
};

const UserPageContainer = ({
  profileColumn,
  postsColumn,
  followsColumn,
}: Props) => {
  const displayedColumn = useAppSelector((state) => state.column);

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
        display={{
          xs: displayedColumn === "profile" ? "block" : "none",
          md: "block",
        }}
        xs={12}
        md={3.5}
        mt={{ xs: 5, md: 12.5 }}
      >
        {profileColumn}
      </Grid>
      {/* posts column */}
      <Grid
        item
        display={{
          xs: displayedColumn === "posts" ? "block" : "none",
          md: "block",
        }}
        xs={12}
        md={5}
        mt={{ xs: 5, md: 12.5 }}
      >
        {postsColumn}
      </Grid>
      {/* follows column */}
      <Grid
        item
        display={{
          xs: displayedColumn === "follows" ? "block" : "none",
          md: "block",
        }}
        xs={10}
        md={3.5}
        mt={{ xs: 5, md: 12.5 }}
      >
        {followsColumn}
      </Grid>
    </Grid>
  );
};

export default UserPageContainer;
