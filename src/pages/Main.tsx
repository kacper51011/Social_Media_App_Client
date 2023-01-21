import { Grid, Box } from "@mui/material";
import { useCallback, useRef, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import PostItem from "../components/column posts/PostItem";
import UserCard from "../components/column user/UserCard";
import FollowedPersonItem from "../components/column follows/FollowedPersonItem";
import FollowsContainer from "../components/column follows/FollowsContainer";
import PostInputComponent from "../components/column posts/PostInputComponent";
import usePostsLoad from "../hooks/usePostsLoad";
import CustomSkeleton from "../components/CustomSkeleton";
import { useAppSelector } from "../hooks/reduxHooks";

export type displayedColumn = "profile" | "posts" | "follows";

const Main = () => {
  const followings = useAppSelector((state) => state.auth.user?.following);
  const posts = useAppSelector((state) => state.posts.posts);
  const user = useAppSelector((state) => state.auth.user);
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
  const { loading, error, hasMore } = usePostsLoad(
    `/api/post/getPosts/${pageNum}`,
    pageNum
  );

  const observer = useRef<IntersectionObserver>();
  const lastPostElementRef = useCallback(
    (node: Element) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNum((prev) => prev + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
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
              photo={user!.picturePath}
              firstName={user!.firstName}
              lastName={user!.lastName}
              location={user!.location}
              followedPeopleNumber={user!.followingIDs.length}
              job={user!.job}
              numberOfLikes={10}
              numberOfProfileViews={user!.viewsProfile}
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

            {posts.map((post, index) => {
              if (posts.length === index + 1) {
                return (
                  <PostItem ref={lastPostElementRef} key={post.id} {...post} />
                );
              } else {
                return <PostItem key={post.id} {...post} />;
              }
            })}
            {loading && <CustomSkeleton width="100%" height="30vw" />}
            {loading && <CustomSkeleton width="100%" height="30vw" />}
            {loading && <CustomSkeleton width="100%" height="30vw" />}
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
                followings &&
                followings.map((following) => {
                  return (
                    <FollowedPersonItem
                      key={following.id}
                      id={following.id}
                      photo={following.picturePath}
                      firstName={following.firstName}
                      lastName={following.lastName}
                      job={following.job}
                    />
                  );
                })
              }
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Main;
