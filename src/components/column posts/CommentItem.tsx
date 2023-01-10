import { Avatar, Grid, Paper, Typography, useTheme } from "@mui/material";

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
  const theme = useTheme();
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
        <Paper
          elevation={1}
          sx={{ backgroundColor: theme.palette.neutral.light, py: 1, px: 0.5 }}
        >
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
