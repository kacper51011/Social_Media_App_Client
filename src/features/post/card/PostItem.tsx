import { forwardRef, Ref } from "react";
import { Paper, Grid, Typography, Box, Divider } from "@mui/material";
import { useAppSelector } from "@hooks";
import { Post } from "@types";
import { ItemContainerStyle } from "./styles";
import { CommentsSection } from "../comment";
import { usePost } from "./usePost";
import {
  AuthorInfo,
  LikeButton,
  FollowButton,
  CardImage,
  StatisticsRow,
} from "./components";

// eslint-disable-next-line react/display-name
export const PostItem = forwardRef(
  (
    {
      id,
      userId,
      userPicturePath,
      picturePath,
      firstName,
      lastName,
      comments,
      description,
      likes,
      job,
    }: Post,
    ref: Ref<Element | null | undefined>
  ) => {
    const authUser = useAppSelector((state) => state.auth.user!);
    const authLikedPosts = useAppSelector(
      (state) => state.auth.user!.likedPostsIDs
    );
    const authFollowings = useAppSelector(
      (state) => state.auth.user!.followingIDs
    );

    // booleans used to change icons and custom hook behaviour

    const IsAuthUserAnAuthor = authUser.id === userId;
    const doUserLikePost = authLikedPosts.includes(id);
    const doUserFollowAuthor = authFollowings.includes(userId);

    const {
      likeUnlike,
      followUnfollow,
      commentsVisibility,
      toggleCommentsVisibility,
    } = usePost({
      id,
      userId,
      job,
      firstName,
      lastName,
      userPicturePath,
      doUserFollowAuthor,
      doUserLikePost,
    });

    return (
      <Paper {...ItemContainerStyle} role="article">
        <Grid container width={1} py={1} direction="row" alignItems="center">
          <Grid item xs={8}>
            <AuthorInfo
              userPicturePath={userPicturePath}
              firstName={firstName}
              userId={userId}
              lastName={lastName}
            />
          </Grid>
          <Grid xs={3} md={2} item display="flex" ml="auto">
            {!IsAuthUserAnAuthor && (
              <>
                <LikeButton onClick={likeUnlike} isLiked={doUserLikePost} />
                <FollowButton
                  onClick={followUnfollow}
                  isFollowing={doUserFollowAuthor}
                />
              </>
            )}
          </Grid>
        </Grid>
        <Typography py={2}>{description}</Typography>
        <CardImage picturePath={picturePath} />
        <StatisticsRow
          likes={likes}
          comments={comments}
          toggleComments={toggleCommentsVisibility}
        />
        {commentsVisibility && <Divider />}
        <Box ref={ref} my={0.2}>
          {commentsVisibility && (
            <CommentsSection id={id} comments={comments} />
          )}
        </Box>
      </Paper>
    );
  }
);
