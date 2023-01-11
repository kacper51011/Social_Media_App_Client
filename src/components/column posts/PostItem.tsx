import { ComponentPropsWithRef, Ref, useState } from "react";
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


// todo: connect redux toolkit to posts


type Comment = {
  id: string;
  userId: string;
  postId: string;
  content: string;
};

type Props = {
  id: string;
  userId: string;
  userPicturePath: string;
  picturePath: string;
  firstName: string;
  lastName: string;
  location: string;
  description: string;
  likes?: string[];
  comments?: Comment[];
} & ComponentPropsWithRef<typeof Paper>;

// todo: comments and likes as objects, then check if user liked post or not

const PostItem = ({
  id,
  userId,
  userPicturePath,
  picturePath,
  firstName,
  lastName,
  location,
  description,
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
        mb: 5,
      }}
    >
      {/* avatar, name, location, button to follow */}
      <Grid container width={1} py={1} direction="row" alignItems="center">
        <Grid item xs={2}>
          <Avatar src={userPicturePath || ""}>{firstName[0]}</Avatar>
        </Grid>

        <Grid item xs={7}>
          <Typography sx={{ cursor: "pointer" }} variant="body1">
            {firstName + " " + lastName}
          </Typography>

          <Typography variant="caption">{location}</Typography>
        </Grid>

        <Grid xs={2.5} item display="flex" justifyContent="right">
          <CustomIconButton title="like post" icon={<ThumbUpAltIcon />} />
          <CustomIconButton
            title="follow"
            icon={true ? <PersonRemoveIcon /> : <PersonAddIcon />}
          />
        </Grid>
      </Grid>
      {/* post content */}
      <Typography pb={2}>{description}</Typography>
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
