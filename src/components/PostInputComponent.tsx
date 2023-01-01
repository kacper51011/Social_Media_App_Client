import { useState } from "react";
import {
  Paper,
  Box,
  Divider,
  Grid,
  Avatar,
  TextField,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

type Props = {
  picturePath: string;
};

const PostInputComponent = ({ picturePath }: Props) => {
  const [isImage, setIsImage] = useState(false);
  const [imageToSend, setImageToSend] = useState<File | null>(null);

  return (
    <Paper sx={{ display: "flex", flexDirection: "column" }}>
      <Grid container width={1}>
        <Grid item xs={2}>
          <Avatar src={picturePath} />
        </Grid>
        <Grid item xs={8}>
          <Paper>
            <TextField sx={{ minWidth: "90%", height: "80%" }}></TextField>
          </Paper>
        </Grid>
      </Grid>
      <Box></Box>
      <Divider orientation="horizontal" />
      <Box></Box>
    </Paper>
  );
};

export default PostInputComponent;
