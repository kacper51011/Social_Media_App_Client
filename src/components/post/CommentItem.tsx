import { Avatar, Grid, Paper, Typography } from "@mui/material";

type Props = {
  commentContent: string;
  commentCreatorFirstName: string;
  commentCreatorLastName: string;
  commentCreatorPicture: string;
};

const CommentItem = ({
  commentContent,
  commentCreatorFirstName,
  commentCreatorLastName,
  commentCreatorPicture,
}: Props) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item>
        <Avatar src={commentCreatorPicture || ""}>
          {commentCreatorFirstName[0]}{" "}
        </Avatar>
      </Grid>
      <Grid item xs={10} sx={{ width: 1, minHeight: 0.2 }}>
        <Paper sx={{ backgroundColor: "whitesmoke" }} elevation={1}>
          <Typography>
            {commentCreatorFirstName + " " + commentCreatorLastName}
          </Typography>
          <Typography>{commentContent}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CommentItem;
