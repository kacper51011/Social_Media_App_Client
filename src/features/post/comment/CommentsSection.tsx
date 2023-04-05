import { Divider } from "@mui/material";
import { CommentInput } from "./components";
import { CommentItem } from "./components/CommentItem";
import { Comment } from "@types";

type Props = {
  id: string;
  comments: Comment[];
};

export const CommentsSection = ({ id, comments }: Props) => {
  return (
    <>
      <CommentInput id={id} />
      <Divider />

      {comments &&
        comments.map((comment) => {
          return (
            <CommentItem
              key={comment.id}
              content={comment.content}
              creatorFirstName={comment.userFirstName}
              creatorLastName={comment.userLastName}
              creatorPicture={comment.userPhotoPicturePath}
            />
          );
        })}
    </>
  );
};
