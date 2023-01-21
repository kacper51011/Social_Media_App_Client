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
import CustomIconButton from "../buttons/CustomIconButton";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import CustomInput from "../CustomInput";
import CommentItem from "./CommentItem";
import { useAppSelector } from "../../hooks/reduxHooks";
import axios from "axios";
import { useDispatch } from "react-redux";
import { follow, likePost, unfollow, unlikePost } from "../../store/authSlice";
import {
  addLikeForPost,
  commentPost,
  removeLikeFromPost,
} from "../../store/postsSlice";

// todo: connect redux toolkit to posts
export type Post = {
  id: string;
  userId: string;
  userPicturePath: string;
  picturePath: string;
  firstName: string;
  lastName: string;
  job: string;
  description: string;
  likes: string[];
  comments: Comment[];
};

export type Comment = {
  id: string;
  userId: string;
  userFirstName: string;
  userLastName: string;
  userPhotoPicturePath: string;
  postId: string;
  content: string;
};

// todo: comments and likes as objects, then check if user liked post or not

const PostItem = forwardRef(
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
    const [commentToSend, setCommentToSend] = useState("");

    const dispatch = useDispatch();
    const authUser = useAppSelector((state) => state.auth.user!);
    const authLikedPosts = useAppSelector(
      (state) => state.auth.user!.likedPostsIDs
    );
    const authFollowings = useAppSelector(
      (state) => state.auth.user!.followingIDs
    );

    const IsAuthUserAnAuthor = authUser.id === userId;
    const doUserLikePost = authLikedPosts.includes(id);
    const doUserFollowAuthor = authFollowings.includes(userId);

    // Function responsible for following and unfollowing post creator through the post
    const followUnfollow: React.MouseEventHandler<
      HTMLButtonElement
    > = async () => {
      try {
        await axios.patch("/api/user/follow", {
          id: authUser!.id,
          userToFollowId: userId,
        });
      } catch (err) {
        return;
      }
      doUserFollowAuthor
        ? dispatch(unfollow(userId))
        : dispatch(
            follow({
              id: userId,
              firstName: firstName,
              lastName: lastName,
              picturePath: userPicturePath,
              job: job,
            })
          );
    };

    // function responsible for leaving a like or unliking the post
    const likeUnlike: React.MouseEventHandler<HTMLButtonElement> = async () => {
      try {
        await axios.patch("/api/post/likePost", {
          userId: authUser!.id,
          postId: id,
        });
      } catch (err) {
        return;
      }
      doUserLikePost
        ? dispatch(removeLikeFromPost({ postId: id, id: authUser.id }))
        : dispatch(addLikeForPost({ postId: id, id: authUser.id }));
      doUserLikePost ? dispatch(unlikePost(id)) : dispatch(likePost(id));
    };

    const sendComment: React.MouseEventHandler<
      HTMLButtonElement
    > = async () => {
      try {
        await axios.post("/api/post/commentPost", {
          id: authUser!.id,
          postId: id,
          content: commentToSend,
        });
        dispatch(
          commentPost({
            userId: authUser.id,
            userFirstName: authUser.firstName,
            userLastName: authUser.lastName,
            userPhotoPicturePath: authUser.picturePath,
            postId: id,
            content: commentToSend,
          })
        );
      } catch (error) {
        console.log(error);
      }
      setCommentToSend("");
    };

    return (
      <Paper
        elevation={5}
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
              <Avatar src={`assets/${userPicturePath}`}>{firstName[0]}</Avatar>

              <Typography
                sx={{ cursor: "pointer" }}
                fontWeight="bold"
                variant="body1"
                ml={1}
              >
                {firstName + " " + lastName}
              </Typography>
            </Box>
          </Grid>

          <Grid xs={2} item display="flex" ml="auto">
            {!IsAuthUserAnAuthor && (
              <>
                <CustomIconButton
                  title="like post"
                  onClick={likeUnlike}
                  icon={
                    authLikedPosts.includes(id) ? (
                      <ThumbDownAltIcon />
                    ) : (
                      <ThumbUpAltIcon />
                    )
                  }
                />
                <CustomIconButton
                  title="follow"
                  onClick={followUnfollow}
                  icon={
                    doUserFollowAuthor ? (
                      <PersonRemoveIcon />
                    ) : (
                      <PersonAddIcon />
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
            src={`assets/${picturePath}`}
            sx={{ minHeight: "20vw", borderRadius: "16px" }}
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
            {likes?.length + " " + "likes"}
          </Typography>

          {/* number of comments */}
          <Typography
            onClick={() => setCommentsVisible(!commentsVisible)}
            component="span"
            variant="caption"
            sx={{ cursor: "pointer" }}
          >
            {comments?.length + " " + "comments"}
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
                  onChange={(e) => setCommentToSend(e.target.value)}
                />
                <Button
                  sx={{ mt: 2 }}
                  disabled={!commentToSend!}
                  variant="outlined"
                  size="small"
                  onClick={sendComment}
                >
                  Send
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
                  commentContent={comment.content}
                  commentCreatorFirstName={comment.userFirstName}
                  commentCreatorLastName={comment.userLastName}
                  commentCreatorPicture={comment.userPhotoPicturePath}
                />
              );
            })}
        </Box>
      </Paper>
    );
  }
);
export default PostItem;
