import { forwardRef, Ref, useState } from "react";
import {
  Paper,
  Grid,
  Avatar,
  Typography,
  CardMedia,
  Box,
  Divider,
  Button,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { CommentItem } from "../comment/components/CommentItem";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { CustomIconButton, CustomInput } from "@components";
import { useAppSelector, usePost, usePostComment } from "@hooks";
import { Post } from "@types";

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
            <Box display="flex" justifyContent="left" alignItems="top">
              <Avatar src={`/assets/${userPicturePath}`}>{firstName[0]}</Avatar>

              <Typography
                sx={{ cursor: "pointer" }}
                fontWeight="bold"
                variant="body1"
                ml={1}
                component="div"
                onClick={() => {
                  navigate(`/profile/${userId}`);
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                {firstName + " " + lastName}
              </Typography>
            </Box>
          </Grid>

          <Grid xs={3} md={2} item display="flex" ml="auto">
            {!IsAuthUserAnAuthor && (
              <>
                <CustomIconButton
                  title={
                    !authLikedPosts.includes(id)
                      ? t("buttonLike")
                      : t("buttonUnlike")
                  }
                  onClick={likeUnlike}
                  icon={
                    authLikedPosts.includes(id) ? (
                      <ThumbDownAltIcon color="primary" />
                    ) : (
                      <ThumbUpAltIcon color="primary" />
                    )
                  }
                />
                <CustomIconButton
                  title={
                    !doUserFollowAuthor
                      ? t("buttonFollow")
                      : t("buttonUnfollow")
                  }
                  onClick={followUnfollow}
                  icon={
                    doUserFollowAuthor ? (
                      <PersonRemoveIcon color="primary" />
                    ) : (
                      <PersonAddIcon color="primary" />
                    )
                  }
                />
              </>
            )}
          </Grid>
        </Grid>
        {/* post content */}
        <Typography py={2}>{description}</Typography>
        {/* post image */}
        <Paper elevation={0}>
          <CardMedia
            component="img"
            loading="lazy"
            src={`/assets/${picturePath}`}
            sx={{
              height: "auto",
              maxWidth: "100%",
              borderRadius: "16px",
            }}
          />
        </Paper>
        {/* statistics */}
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
            variant="caption"
            sx={{ cursor: "pointer" }}
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
