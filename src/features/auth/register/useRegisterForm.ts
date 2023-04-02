import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserRegisterType } from "./types";
import { UserRegisterSchema } from "./validation";
import axios from "axios";
import { useNavigate } from "react-router";

export const useRegisterForm = () => {
  const [registerFile, setRegisterFile] = useState<File | null>(null);
  const navigate = useNavigate();
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserRegisterType & { customError: string }>({
    resolver: zodResolver(UserRegisterSchema),
  });

  const onSubmit: SubmitHandler<UserRegisterType> = async (data) => {
    if (!registerFile) {
      return setError("customError", {
        type: "custom",
        message: "Enter a photo for your profile picture!",
      });
    }

    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("job", data.job);
    formData.append("location", data.location);
    formData.append("profilePhoto", registerFile);

    try {
      await axios.post<UserRegisterType & { profilePhoto: File }>(
        "http://localhost:3001/api/user/register",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      navigate("/login");
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
  const errorMessages =
    errors.firstName?.message ||
    errors.lastName?.message ||
    errors.email?.message ||
    errors.password?.message ||
    errors.confirmPassword?.message ||
    errors.location?.message ||
    errors.job?.message ||
    errors.customError?.message;

  const formHandle = handleSubmit(onSubmit);

  return {
    register,
    isSubmitting,
    formHandle,
    registerFile,
    setRegisterFile,
    errorMessages,
  };
};
