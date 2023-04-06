import {
  Paper,
  Divider,
  Grid,
  Avatar,
  useTheme,
  InputBase,
} from "@mui/material";
import { CustomDropzone } from "@components";
import { useAppSelector } from "@hooks";
import { useTranslation } from "react-i18next";
import { inputContainerStyle, inputStyle } from "./styles";
import { SubmitButton } from "./components";
import { usePostInput } from "./usePostInput";

export const CreatePostInput = () => {
  const user = useAppSelector((state) => state.auth.user);
  const theme = useTheme();
  const { t } = useTranslation("dropzone");
  const { postInput, setPostInput, fileToSend, setFileToSend, createPost } =
    usePostInput();
  return (
    <Paper
      onSubmit={createPost}
      component="form"
      sx={{ ...inputContainerStyle }}
    >
      <Grid role="none" container direction="row" alignItems="center" width={1}>
        <Grid item xs={1}>
          <Avatar
            alt="User profile image"
            src={`http://localhost:3001/assets/${user?.picturePath}`}
          />
        </Grid>
        <Grid item xs={11} display="flex" justifyContent="right">
          <Paper
            role="none"
            sx={{
              backgroundColor: theme.palette.neutral.light,
              ...inputStyle,
            }}
          >
            <InputBase
              aria-label="input for creating post content"
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
      <SubmitButton disabledWhen={!fileToSend} />
    </Paper>
  );
};
