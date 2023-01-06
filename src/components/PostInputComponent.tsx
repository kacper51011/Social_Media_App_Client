import { useState } from "react";
import {
  Paper,
  Box,
  Divider,
  Grid,
  Avatar,
  useTheme,
  InputBase,
  Typography,
} from "@mui/material";
import { useDropzone } from "react-dropzone";
import Button from "@mui/material/Button";
import CustomIconButton from "./buttons/CustomIconButton";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import CustomDropzone from "./CustomDropzone";

type Props = {
  picturePath: string;
};

const PostInputComponent = ({ picturePath }: Props) => {
  // I created separate state for file to send, it helps me with deleting already downloaded files from upload list

  const [postInput, setPostInput] = useState("");
  const [fileToSend, setFileToSend] = useState<null | File>(null);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [".png", ".jpg", ".jpeg"] },
    maxSize: 3000000,
    multiple: false,
    disabled: !!fileToSend,
    onDropAccepted(files, event) {
      setFileToSend(files[0]);
    },
  });

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
      <Grid container direction="row" alignItems="center" width={1}>
        <Grid item xs={1}>
          <Avatar src={picturePath} />
        </Grid>
        <Grid item xs={11} display="flex" justifyContent="right">
          <Paper
            sx={{
              borderRadius: "16px",
              backgroundColor: theme.palette.neutral.light,
              minHeight: "5vh",
              width: 1,
              p: 1,
              ml: 3,
              my: 2,
            }}
          >
            <InputBase
              onChange={(e) => {
                setPostInput(e.target.value);
              }}
              placeholder="Write your post here..."
              sx={{ width: "90%" }}
            />
          </Paper>
        </Grid>
      </Grid>

      <CustomDropzone fileToSend={fileToSend} setFileToSend={setFileToSend} />
      <Divider orientation="horizontal" sx={{ my: 2 }} />
      <Box display="flex" justifyContent="right" width={1}>
        <Button disabled={!postInput} variant="outlined">
          Send
        </Button>
      </Box>
    </Paper>
  );
};

export default PostInputComponent;
