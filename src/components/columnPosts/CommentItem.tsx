import { Avatar, Grid, Paper, Typography, useTheme } from "@mui/material";

type Props = {
  commentContent: string;
  commentCreatorFirstName: string;
  commentCreatorLastName: string;
  commentCreatorPicture: string;
};

export const CommentItem = ({
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
      my={1}
    >
      <Grid item>
        <Avatar src={`/assets/${commentCreatorPicture}` || ""}>
          {commentCreatorFirstName[0]}{" "}
        </Avatar>
      </Grid>
      <Grid item xs={10.5} sx={{ minHeight: 0.2 }}>
        <Typography variant="caption" fontWeight="600">
          {commentCreatorFirstName + " " + commentCreatorLastName}
        </Typography>
        <Paper
          elevation={1}
          sx={{
            backgroundColor: theme.palette.neutral.light,
            py: 1,
            mt: 0.25,
            px: 1,
            width: "fit-content",
            borderRadius: "16px",
          }}
        >
          <Typography variant="caption" fontWeight={500}>
            {commentContent}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
