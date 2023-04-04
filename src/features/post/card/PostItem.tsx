import { forwardRef, MouseEvent, Ref, useState } from "react";
import {
  Paper,
  Grid,
  Avatar,
  Typography,
  Box,
  Divider,
  Button,
} from "@mui/material";
import { CommentItem } from "../comment/components/CommentItem";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { CustomInput } from "@components";
import { useAppSelector, usePost, usePostComment } from "@hooks";
import { Post } from "@types";
import { CardImage } from "./components/CardImage";
import { LikeButton } from "./components/LikeButton";
import { FollowButton } from "./components/FollowButton";
import { commentsDisplayStyle } from "./styles";
import { AuthorInfo } from "./components/AuthorInfo";

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
    const [commentsVisible, setCommentsVisible] = useState(false);
    const { t } = useTranslation("posts");
    const navigate = useNavigate();

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

    const { likeUnlike, followUnfollow } = usePost({
      id,
      userId,
      job,
      firstName,
      lastName,
      userPicturePath,
      doUserFollowAuthor,
      doUserLikePost,
    });

    const { commentToSend, setCommentToSend, sendComment } = usePostComment(id);

    return (
      <Paper
        elevation={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          p: { xs: 1, md: 2 },
          borderRadius: "16px",
          mb: 5,
        }}
      >
        {/* avatar, name, location, button to follow */}
        <Grid container width={1} py={1} direction="row" alignItems="center">
          <Grid item xs={8}>
            <AuthorInfo
              userPicturePath={""}
              firstName={""}
              userId={""}
              lastName={""}
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
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          my={2}
        >
          <Typography variant="caption">
            {likes?.length + " " + t("likes")}
          </Typography>

          {/* number of comments */}
          <Typography
            onClick={() => setCommentsVisible(!commentsVisible)}
            component="span"
            {...commentsDisplayStyle}
          >
            {`${comments ? comments.length : 0} ${t("comments")}`}
          </Typography>
        </Box>
        {commentsVisible && <Divider />}

        <Box ref={ref} my={0.2}>
          {commentsVisible && (
            <>
              <Box
                my={2}
                display="flex"
                flexDirection="column"
                alignItems="flex-end"
              >
                <CustomInput
                  minRows={3}
                  multiline
                  height={1}
                  value={commentToSend}
                  placeholder={t("comment")!}
                  onChange={(e) => setCommentToSend(e.target.value)}
                />
                <Button
                  sx={{ mt: 2 }}
                  disabled={!commentToSend!}
                  variant="outlined"
                  size="small"
                  onClick={sendComment}
                >
                  {t("commentButton")}
                </Button>
              </Box>
              <Divider />
            </>
          )}

          {commentsVisible &&
            comments &&
            comments.map((comment) => {
              return (
                <CommentItem
                  key={comment.id}
                  content={comment.content}
                  creatorFirstName={comment.userFirstName}
                  creatorLastName={comment.userLastName}
                  creatorPicture={comment.userPhotoPicturePath}
                />
              );
            })}
        </Box>
      </Paper>
    );
  }
);
