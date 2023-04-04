import { useAppSelector } from "@hooks";
import { addPost, setNewUserPost } from "@store";
import axios from "axios";
import { FormEventHandler, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";

export const usePostInput = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [postInput, setPostInput] = useState("");
  const [fileToSend, setFileToSend] = useState<null | File>(null);
  useDropzone({
    accept: { "image/*": [".png", ".jpg", ".jpeg"] },
    maxSize: 3000000,
    multiple: false,
    disabled: !!fileToSend,
    onDropAccepted(files) {
      setFileToSend(files[0]);
    },
  });
  const createPost: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("userId", user.id as string);
    formData.append("description", postInput);
    formData.append("postPhoto", fileToSend as File);
    try {
      const response = await axios.post("/api/post/createPost", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      dispatch(setNewUserPost(response.data.message.id));
      dispatch(addPost(response.data.message));
    } catch (err) {
      console.log(err);
    }
    setPostInput("");
    setFileToSend(null);
  };
  return { postInput, setPostInput, fileToSend, setFileToSend, createPost };
};
