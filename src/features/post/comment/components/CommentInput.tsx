import { CustomInput } from "@components";
import { useCommentInput } from "./useCommentInput";
import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

type Props = {
  id: string;
};

export const CommentInput = ({ id }: Props) => {
  const { commentToSend, setCommentToSend, sendComment } = useCommentInput(id);
  const { t } = useTranslation("posts");

  return (
    <Box my={2} display="flex" flexDirection="column" alignItems="flex-end">
      <CustomInput
        minRows={3}
        multiline
        height={1}
        value={commentToSend}
        placeholder={t("comment")!}
        onChange={(e) => setCommentToSend(e.target.value)}
      />
      <Button
        sx={{ mt: 2 }}
        disabled={!commentToSend!}
        variant="outlined"
        size="small"
        onClick={sendComment}
      >
        {t("commentButton")}
      </Button>
    </Box>
  );
};
