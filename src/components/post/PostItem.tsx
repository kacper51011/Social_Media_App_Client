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
import CustomInput from "../CustomInput";
import CommentItem from "./CommentItem";

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
  return (
    <Paper sx={{ display: "flex", flexDirection: "column", p: 2 }}>
      {/* avatar, name, location, button to follow */}
      <Grid container py={1} direction="row" alignItems="center">
        <Grid item xs={2}>
          <Avatar src={photo || ""}>{firstName[0]}</Avatar>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body1">{firstName + " " + lastName}</Typography>

          <Typography variant="caption">{location}</Typography>
        </Grid>

        <Grid item xs={4}>
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
          sx={{ minWidth: "20vw", minHeight: "20vw" }}
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
        <Typography variant="caption">{"50" + " " + "comments"}</Typography>
      </Box>
      <Divider />
      <Box sx={{ minHeight: "5vw", color: "bisque", p: 2, mt: 2 }}>
        <CustomInput minRows={2} multiline height={1} firstName="Kacper" />
      </Box>
      <Divider />
      <Box mt={1}>
        <CommentItem
          commentContent="nice one"
          commentCreatorFirstName="Kacper"
          commentCreatorLastName="Tylec"
          commentCreatorPicture=""
        />
      </Box>
    </Paper>
  );
};

export default PostItem;
