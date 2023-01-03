import { Grid, Container } from "@mui/material";
import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import PostItem from "../components/PostItem";
import UserCard from "../components/UserCard";

export type displayedColumn = "profile" | "posts" | "follows";

const Main = () => {
  const [displayedColumn, setDisplayedColumn] =
    useState<displayedColumn>("posts");

  const changeColumn = (column: displayedColumn): void => {
    displayedColumn !== column && setDisplayedColumn(column);
  };

  // function for checking which one column should be displayed now and setting the visibility on mobiles (posts visible by default)
  const checkVisibility = (column: displayedColumn) => {
    return displayedColumn === column ? "block" : "none";
  };

  return (
    <>
      <Navbar changeColumn={changeColumn} />
      <Container>
        <Grid
          spacing={10}
          minHeight="100vh"
          justifyContent="center"
          container
          direction="row"
        >
          {/* profile column */}
          <Grid
            item
            display={{ xs: checkVisibility("profile"), md: "block" }}
            xs={10}
            md={3.5}
            mt={10}
          >
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
          <Grid
            item
            display={{ xs: checkVisibility("posts"), md: "block" }}
            xs={10}
            md={5}
            mt={5}
          >
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
          <Grid
            item
            display={{ xs: checkVisibility("posts"), md: "block" }}
            xs={10}
            md={3.5}
          ></Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Main;
