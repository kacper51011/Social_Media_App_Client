import { useState } from "react";
import {
  Paper,
  Grid,
  Avatar,
  Typography,
  CardMedia,
  Box,
  Divider,
  useTheme,
} from "@mui/material";
import CustomIconButton from "../buttons/CustomIconButton";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CustomInput from "../CustomInput";
import CommentItem from "./CommentItem";
import { ButtonBase } from "@mui/material";

type Props = {
  photo: string;
  firstName: string;
  lastName: string;
  location: string;
  isFollowed: boolean;
  content: string;
  likes: number;
  // comments: []
};

// todo: comments and likes as objects, then check if user liked post or not

const PostItem = ({
  photo,
  firstName,
  lastName,
  location,
  isFollowed,
  content,
  likes,
}: Props) => {
  const [commentsVisible, setCommentsVisible] = useState(false);
  const theme = useTheme();

  return (
    <Paper
      elevation={5}
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
        borderRadius: "16px",
      }}
    >
      {/* avatar, name, location, button to follow */}
      <Grid container py={1} direction="row" alignItems="center">
        <Grid item xs={2}>
          <Avatar src={photo || ""}>{firstName[0]}</Avatar>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body1">{firstName + " " + lastName}</Typography>

          <Typography variant="caption">{location}</Typography>
        </Grid>

        <Grid item xs={4} display="flex" justifyContent="right">
          <CustomIconButton title="like post" icon={<ThumbUpAltIcon />} />
          <CustomIconButton
            title="follow"
            icon={isFollowed ? <PersonRemoveIcon /> : <PersonAddIcon />}
          />
        </Grid>
      </Grid>
      {/* post content */}
      <Typography pb={2}>{content}</Typography>
      {/* post image */}
      <Paper elevation={2}>
        <CardMedia
          component="img"
          src=""
          sx={{ minWidth: "20vw", minHeight: "20vw", borderRadius: "16px" }}
        />
      </Paper>
      {/* statistics */}
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        my={2}
      >
        <Typography variant="caption">{likes + " " + "likes"}</Typography>

        {/* todo create comment type */}
        <Typography
          onClick={() => setCommentsVisible(!commentsVisible)}
          component="span"
          variant="caption"
          sx={{ cursor: "pointer" }}
        >
          {"50" + " " + "comments"}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ minHeight: "5vw", color: "bisque", p: 2, mt: 2 }}>
        <CustomInput minRows={2} multiline height={1} firstName="Kacper" />
      </Box>
      <Divider />
      <Box mt={1}>
        {commentsVisible && (
          <CommentItem
            commentContent="nice one"
            commentCreatorFirstName="Kacper"
            commentCreatorLastName="Tylec"
            commentCreatorPicture=""
          />
        )}
      </Box>
    </Paper>
  );
};

export default PostItem;
