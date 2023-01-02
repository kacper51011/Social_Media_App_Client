import {
  Paper,
  Grid,
  Avatar,
  Typography,
  CardMedia,
  Box,
  Divider,
} from "@mui/material";
import CustomIconButton from "./CustomIconButton";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import CustomInput from "./CustomInput";

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

const PostItem = ({
  photo,
  firstName,
  lastName,
  location,
  isFollowed,
  content,
  likes,
}: // comments
Props) => {
  return (
    <Paper
      sx={{ display: "flex", flexDirection: "column", minWidth: "30vh", p: 2 }}
    >
      {/* avatar, name, location, button to follow */}
      <Grid
        container
        py={1}
        width="1"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid container xs={5} direction="row">
          <Grid item pr={2}>
            <Avatar src={photo || ""}>{firstName[0]}</Avatar>
          </Grid>

          <Grid item>
            <Typography variant="body1">
              {firstName + " " + lastName}
            </Typography>

            <Typography variant="caption">{location}</Typography>
          </Grid>
        </Grid>

        <Grid item>
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
      <Paper
        elevation={2}
        sx={{ minHeight: "5vw", color: "bisque", p: 2, mt: 2 }}
      >
        <CustomInput minRows={3} multiline height={1} firstName="Kacper" />
      </Paper>
      <Divider />
      <Paper></Paper>
    </Paper>
  );
};

export default PostItem;
