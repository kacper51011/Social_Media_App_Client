import { Avatar, Grid, Typography, useTheme } from "@mui/material";
import { useAppSelector } from "@hooks";
import { Following } from "@store";
import { FollowsItemButton, NameLink } from "./components";
import { itemContainerStyle } from "./styles";

export type FollowProps = {
  followedPerson: Following;
};

export const FollowsItem = ({ followedPerson }: FollowProps) => {
  const theme = useTheme();
  const authUser = useAppSelector((state) => state.auth.user);

  const { id, firstName, lastName, picturePath, job } = followedPerson;
  const isUserFollowed = authUser?.followingIDs.includes(id);

  return (
    <Grid
      {...itemContainerStyle}
      sx={{
        backgroundColor: theme.palette.neutral.light,
        borderRadius: "16px",
      }}
    >
      <Grid marginRight={1} item xs={3}>
        <Avatar
          alt="Followed person profile image"
          src={`http://localhost:3001/assets/${picturePath}` || ""}
        >
          {firstName[0]}
        </Avatar>
      </Grid>
      <Grid item xs={6} flexDirection="column">
        <NameLink id={id} firstName={firstName} lastName={lastName} />
        <Typography variant="caption">{job}</Typography>
      </Grid>

      <Grid item xs={2}>
        <FollowsItemButton
          isUserFollowed={isUserFollowed}
          authUserId={authUser.id}
          {...followedPerson}
        />
      </Grid>
    </Grid>
  );
};
