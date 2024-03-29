import axios from "axios";
import { MouseEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import { commentPost } from "@store";
import { useAppSelector } from "@hooks";

export const useCommentInput = (id: string) => {
  const [commentToSend, setCommentToSend] = useState("");
  const dispatch = useDispatch();
  const authUser = useAppSelector((state) => state.auth.user!);

  const sendComment: MouseEventHandler<HTMLButtonElement> = async () => {
    try {
      await axios.post("/api/post/commentPost", {
        id: authUser!.id,
        postId: id,
        content: commentToSend,
      });
      dispatch(
        commentPost({
          userId: authUser.id,
          userFirstName: authUser.firstName,
          userLastName: authUser.lastName,
          userPhotoPicturePath: authUser.picturePath,
          postId: id,
          content: commentToSend,
        })
      );
    } catch (error) {
      return;
    }
    setCommentToSend("");
  };
  return { commentToSend, setCommentToSend, sendComment };
};
