import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserLoginSchema } from "./validation";
import { z } from "zod";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setLogin } from "@store";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormEventHandler } from "react";
import { UserLoginType } from "./types";

export const useLoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<UserLoginType & { customError: string }>({
    resolver: zodResolver(UserLoginSchema),
  });

  const submitHandleFunction: SubmitHandler<UserLoginType> = async (data) => {
    try {
      const responseData = await axios.post("/api/user/login", data);
      dispatch(setLogin(responseData.data.user));

      localStorage.setItem("userInfo", JSON.stringify(responseData.data.user));
      navigate("/");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return setError("customError", {
          type: "custom",
          message: err.response?.data.message,
        });
      } else
        return setError("customError", {
          type: "custom",
          message: "Unexpected error",
        });
    }
  };
  const formHandle: FormEventHandler<HTMLFormElement> =
    handleSubmit(submitHandleFunction);
  return { register, errors, formHandle, isSubmitting };
};
