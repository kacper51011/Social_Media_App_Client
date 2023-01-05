import { useState } from "react";
import {
  Paper,
  Box,
  Divider,
  Grid,
  Avatar,
  TextField,
  useTheme,
} from "@mui/material";
import Dropzone from "react-dropzone";

type Props = {
  picturePath: string;
};

const PostInputComponent = ({ picturePath }: Props) => {
  const [isImage, setIsImage] = useState(false);
  const [imageToSend, setImageToSend] = useState<File | null>(null);
  const [postInput, setPostInput] = useState("");

  const theme = useTheme();

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        mt: 10,
        mb: 5,
        p: 2,
      }}
    >
      <Grid container direction="row" width={1}>
        <Grid item xs={1}>
          <Avatar src={picturePath} />
        </Grid>
        <Grid item xs={11} display="flex" justifyContent="right">
          <Paper
            sx={{
              borderRadius: "16px",
              backgroundColor: theme.palette.neutral.medium,
              height: "10vh",
              width: 1,
              ml: 3,
            }}
          ></Paper>
        </Grid>
      </Grid>
      <Box></Box>
      <Divider orientation="horizontal" />
      <Box></Box>
    </Paper>
  );
};

export default PostInputComponent;
