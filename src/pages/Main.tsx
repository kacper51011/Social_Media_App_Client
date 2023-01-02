import { Grid, Container } from "@mui/material";
import { useState } from "react";
import PostItem from "../components/PostItem";
import UserCard from "../components/UserCard";

type displayedColumn = "profile" | "posts" | "follows";

const Main = () => {
  const [displayedColumn, setDisplayedColumn] =
    useState<displayedColumn>("posts");

  // function for checking which one column should be displayed now and setting the visibility on mobiles (posts visible by default)
  const checkVisibility = (column: displayedColumn) => {
    return displayedColumn === column ? 12 : 0;
  };

  return (
    <Container>
      <Grid
        spacing={2}
        minHeight="100vh"
        width="100vw"
        container
        direction="row"
      >
        {/* profile column */}
        <Grid item xs={12} md={4} mt={10}>
          <UserCard
            photo="123"
            firstName="Kacper"
            lastName="Tylec"
            location="Nagoszyn"
            followedPeopleNumber={10}
            job="Programmer"
            numberOfLikes={10}
            numberOfProfileViews={15}
          />
        </Grid>
        {/* posts column */}
        <Grid item xs={checkVisibility("posts")} md={4}>
          <PostItem
            content="random post"
            firstName="Kacper"
            lastName="Tylec"
            location="Nagoszyn"
            isFollowed={false}
            photo=""
            likes={23}
          />
        </Grid>
        {/* follows column */}
        <Grid item xs={checkVisibility("follows")} md={3.5}></Grid>
      </Grid>
    </Container>
  );
};

export default Main;
