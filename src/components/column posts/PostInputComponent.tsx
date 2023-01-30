import { useState } from "react";
import {
  Paper,
  Box,
  Divider,
  Grid,
  Avatar,
  useTheme,
  InputBase,
} from "@mui/material";
import { useDropzone } from "react-dropzone";
import Button from "@mui/material/Button";
import CustomDropzone from "../CustomDropzone";
import axios from "axios";
import { useAppSelector } from "../../hooks/reduxHooks";
import { useDispatch } from "react-redux";
import { setNewUserPost } from "../../store/authSlice";
import { useTranslation } from "react-i18next";
import { addPost } from "../../store/postsSlice";

const PostInputComponent = () => {
  // I created separate state for file to send, it helps me with deleting already downloaded files from upload list
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [postInput, setPostInput] = useState("");
  const [fileToSend, setFileToSend] = useState<null | File>(null);
  const theme = useTheme();
  const { t, i18n } = useTranslation("dropzone");
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [".png", ".jpg", ".jpeg"] },
    maxSize: 3000000,
    multiple: false,
    disabled: !!fileToSend,
    onDropAccepted(files, event) {
      setFileToSend(files[0]);
    },
  });

  const createPost: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("userId", user!.id as string);
    formData.append("description", postInput);
    formData.append("postPhoto", fileToSend as File);
    try {
      const response = await axios.post("/api/post/createPost", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data.message);
      dispatch(setNewUserPost(response.data.message.id));
      dispatch(addPost(response.data.message));
    } catch (err) {
      console.log(err);
    }
    setPostInput("");
    setFileToSend(null);
  };

  return (
    <Paper
      onSubmit={createPost}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",

        mb: 5,
        p: 2,
      }}
    >
      <Grid container direction="row" alignItems="center" width={1}>
        <Grid item xs={1}>
          <Avatar src={`/assets/${user?.picturePath}`} />
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
              value={postInput}
              placeholder={t("inputPlaceholder")!}
              sx={{ width: "90%" }}
            />
          </Paper>
        </Grid>
      </Grid>

      <CustomDropzone fileToSend={fileToSend} setFileToSend={setFileToSend} />
      <Divider orientation="horizontal" sx={{ my: 2 }} />
      <Box display="flex" justifyContent="right" width={1}>
        <Button disabled={!postInput} variant="outlined" type="submit">
          {t("button")}
        </Button>
      </Box>
    </Paper>
  );
};

export default PostInputComponent;
