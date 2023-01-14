import { Grid, Box } from "@mui/material";
import { useCallback, useRef, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import PostItem from "../components/column posts/PostItem";
import UserCard from "../components/column user/UserCard";
import FollowedPersonItem from "../components/column follows/FollowedPersonItem";
import FollowsContainer from "../components/column follows/FollowsContainer";
import PostInputComponent from "../components/PostInputComponent";
import usePostsLoad from "../hooks/usePostsLoad";

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
  const [pageNum, setPageNum] = useState(1);
  const { firstLoad, loading, error, posts, hasMore } = usePostsLoad(
    "/api/post/getPosts",
    pageNum
  );

  const observer = useRef<IntersectionObserver | null>(null);
  const lastBookElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNum((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <>
      <Navbar changeColumn={changeColumn} />
      <Box mx={{ xs: 1, md: 8 }}>
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
            <UserCard
              photo=""
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
            xs={12}
            md={5}
          >
            <PostInputComponent />
            {/* <PostItem
              id="random"
              description="random post"
              firstName="Kacper"
              lastName="Tylec"
              location="Nagoszyn"
              userPicturePath=""
              likes={["123"]}
              userId={""}
              picturePath={""}
              comments = 
            /> */}
            {posts.map((post, index) => {
              if (posts.length === index + 1) {
                return (
                  <PostItem
                    ref={lastBookElementRef}
                    key={post.id}
                    id={post.id}
                    userId={post.userId}
                    userPicturePath={post.userPicturePath}
                    picturePath={post.picturePath}
                    firstName={post.firstName}
                    lastName={post.lastName}
                    location={post.location}
                    description={post.description}
                    comments={post.comments}
                    likes={post.likes}
                  />
                );
              } else {
                return (
                  <PostItem
                    key={post.id}
                    id={post.id}
                    userId={post.userId}
                    userPicturePath={post.userPicturePath}
                    picturePath={post.picturePath}
                    firstName={post.firstName}
                    lastName={post.lastName}
                    location={post.location}
                    description={post.description}
                    likes={post.likes}
                    comments={post.comments}
                  />
                );
              }
            })}
          </Grid>
          {/* follows column */}
          <Grid
            item
            display={{ xs: checkVisibility("follows"), md: "block" }}
            xs={10}
            md={3.5}
            mt={10}
          >
            <FollowsContainer
              childrens={
                <FollowedPersonItem
                  firstName="Paulina"
                  lastName="Wójcik"
                  job="teacher"
                  followFunction={() => "none"}
                />
              }
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Main;
