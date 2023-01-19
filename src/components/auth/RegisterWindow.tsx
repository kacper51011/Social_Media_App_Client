import {
  Box,
  Paper,
  Button,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import CustomDropzone from "../CustomDropzone";
import { ReactComponent as RegisterWindowImage } from "../../utils/RegisterWindowImage.svg";
import { UserRegisterSchema } from "../../utils/ValidationSchemas";
import axios from "axios";

// pre: I decided to not mess with dropzone and react hook form + zod,
// so Im using state for file, which is not controlled by react hook form(state which let user add and delete single image )
// Also I decided to not preload data in new FormData, cause whole information about it will be in one place, not in components (A bit less code there)
//

type Props = {
  setShowRegisterWindow: React.Dispatch<React.SetStateAction<boolean>>;
};

type UserRegisterType = z.infer<typeof UserRegisterSchema>;

const RegisterWindow = ({ setShowRegisterWindow }: Props) => {
  const [registerFile, setRegisterFile] = useState<File | null>(null);
  const theme = useTheme();
  const desktopSize = useMediaQuery(theme.breakpoints.up("md"));

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
      setShowRegisterWindow(false);
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

  return (
    <Paper
      elevation={4}
      sx={{
        minHeight: { xs: 0.6, lg: 0.9 },
        width: { xs: 0.95, lg: 0.9 },
        borderRadius: "16px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {desktopSize && (
        <Box
          width={0.5}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <RegisterWindowImage width="90%" />
        </Box>
      )}

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        width={{ xs: 1, lg: 0.5 }}
        height={1}
        display="flex"
        flexDirection="column"
        py={4}
        px={{ xs: 2, lg: 6 }}
      >
        <Typography textAlign="center" fontWeight="bold" variant="h4">
          Join&nbsp;us!
        </Typography>
        {/* firstName and lastName row */}
        <Box display="flex">
          <TextField
            label="First Name"
            variant="standard"
            sx={{ width: 0.45 }}
            disabled={isSubmitting}
            {...register("firstName")}
          ></TextField>
          <Box width={0.1} />
          <TextField
            label="Last Name"
            variant="standard"
            sx={{ width: 0.45 }}
            disabled={isSubmitting}
            {...register("lastName")}
          ></TextField>
        </Box>
        {/* Location and Job row */}
        <Box display="flex">
          <TextField
            sx={{ my: 1, width: 0.45 }}
            variant="standard"
            label="Location"
            disabled={isSubmitting}
            {...register("location")}
          ></TextField>
          <Box width={0.1} />
          <TextField
            sx={{ my: 1, width: 0.45 }}
            variant="standard"
            label="Job"
            fullWidth
            disabled={isSubmitting}
            {...register("job")}
          ></TextField>
        </Box>
        {/* email */}
        <TextField
          variant="standard"
          sx={{ my: 1 }}
          type="email"
          label="Email"
          fullWidth
          disabled={isSubmitting}
          {...register("email")}
        ></TextField>
        {/* password row */}
        <Box display="flex">
          <TextField
            sx={{ my: 1, width: 0.45 }}
            variant="standard"
            label="Password"
            type="password"
            fullWidth
            disabled={isSubmitting}
            {...register("password")}
          ></TextField>
          <Box width={0.1} />
          <TextField
            sx={{ my: 1, width: 0.45 }}
            variant="standard"
            type="password"
            label="ConfirmPassword"
            disabled={isSubmitting}
            {...register("confirmPassword")}
            fullWidth
          ></TextField>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <CustomDropzone
            width={0.8}
            mt={3}
            fileToSend={registerFile}
            setFileToSend={setRegisterFile}
            holdSpace
          />
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          {/* spaceholder */}
          {!errorMessages && (
            <Typography visibility="hidden" variant="caption" color="error">
              spaceholder for errors
            </Typography>
          )}
          {errorMessages && (
            <Typography variant="caption" fontWeight="bold" color="error">
              {" "}
              {errorMessages}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            sx={{
              width: 0.3,
              py: 1.5,
              px: 7,
              color: "white",
              mb: 2,
            }}
          >
            Register
          </Button>

          <Typography
            sx={{ cursor: "pointer" }}
            fontWeight="700"
            component="span"
            variant="subtitle1"
            textAlign="center"
            onClick={() => setShowRegisterWindow(false)}
          >
            Already&nbsp;have&nbsp;account? Click&nbsp;here!
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default RegisterWindow;
