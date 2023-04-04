import { Box, Typography } from "@mui/material";
import { commentsDisplayStyle } from "../styles";
import { useTranslation } from "react-i18next";
import { Comment } from "@types";
import { MouseEventHandler } from "react";

type Props = {
  likes: string[];
  comments: Comment[];
  toggleComments: MouseEventHandler<HTMLSpanElement>;
};

export const StatisticsRow = ({ likes, comments, toggleComments }: Props) => {
  const { t } = useTranslation("posts");
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      my={2}
    >
      <Typography variant="caption">
        {likes?.length + " " + t("likes")}
      </Typography>

      {/* number of comments */}
      <Typography
        onClick={toggleComments}
        component="span"
        {...commentsDisplayStyle}
      >
        {`${comments ? comments.length : 0} ${t("comments")}`}
      </Typography>
    </Box>
  );
};
