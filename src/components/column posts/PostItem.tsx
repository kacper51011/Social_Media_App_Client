import { forwardRef, Ref, useState } from "react";
import {
  Paper,
  Grid,
  Avatar,
  Typography,
  CardMedia,
  Box,
  Divider,
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

// todo: connect redux toolkit to posts
export type Post = {
  id: string;
  userId: string;
  userPicturePath: string;
  picturePath: string;
  firstName: string;
  lastName: string;
  location: string;
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
      location,
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

    const followUnfollow = async () => {
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

    const likeUnlike = async () => {
      try {
        await axios.patch("/api/post/likePost", {
          userId: authUser!.id,
          postId: id,
        });
      } catch (err) {
        return;
      }
      doUserLikePost ? dispatch(unlikePost(id)) : dispatch(likePost(id));
    };

    return (
      <Paper
        elevation={5}
        sx={{
          display: "flex",
          flexDirection: "column",
          p: { xs: 0, md: 2 },
          borderRadius: "16px",
          mb: 5,
        }}
      >
        {/* avatar, name, location, button to follow */}
        <Grid container width={1} py={1} direction="row" alignItems="center">
          <Grid item xs={1.75}>
            <Avatar src={`assets/${userPicturePath}`}>{firstName[0]}</Avatar>
          </Grid>

          <Grid item xs={7}>
            <Typography sx={{ cursor: "pointer" }} variant="body1">
              {firstName + " " + lastName}
            </Typography>

            <Typography variant="caption">{location}</Typography>
          </Grid>

          <Grid xs={2.5} item display="flex" justifyContent="right">
            {!IsAuthUserAnAuthor && (
              <>
                <CustomIconButton
                  title="like post"
                  onClick={() => likeUnlike()}
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
                  onClick={() => followUnfollow()}
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
        <Typography pb={2}>{description}</Typography>
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
        <Divider />
        <Box sx={{ minHeight: "5vw", color: "bisque", p: 2, mt: 0.3 }}>
          <CustomInput
            minRows={2}
            multiline
            height={1}
            value={commentToSend}
            onChange={(e) => setCommentToSend(e.target.value)}
            firstName="Kacper"
          />
        </Box>
        <Divider />
        <Box ref={ref} mt={0.2}>
          {commentsVisible &&
            comments &&
            comments.map((comment) => {
              return (
                <CommentItem
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
