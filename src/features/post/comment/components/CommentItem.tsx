import { Avatar, Grid, Paper, Typography, useTheme } from "@mui/material";
import { contentContainerStyle, itemContainerStyle } from "./styles";

type Comment = {
  content: string;
  creatorFirstName: string;
  creatorLastName: string;
  creatorPicture: string;
};

export const CommentItem = ({
  content,
  creatorFirstName,
  creatorLastName,
  creatorPicture,
}: Comment) => {
  const theme = useTheme();

  return (
    <Grid {...itemContainerStyle}>
      <Grid item>
        <Avatar src={`/assets/${creatorPicture}` || ""}>
          {creatorFirstName[0]}{" "}
        </Avatar>
      </Grid>
      <Grid item xs={10.5} sx={{ minHeight: 0.2 }}>
        <Typography variant="caption" fontWeight="600">
          {creatorFirstName + " " + creatorLastName}
        </Typography>
        <Paper
          elevation={1}
          sx={{
            backgroundColor: theme.palette.neutral.light,
            ...contentContainerStyle,
          }}
        >
          <Typography variant="caption" fontWeight={500}>
            {content}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
