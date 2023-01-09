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
    watch,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserRegisterType & { customError: string }>({
    resolver: zodResolver(UserRegisterSchema),
  });

  const onSubmit: SubmitHandler<UserRegisterType> = (data) => {
    console.log(data);
    if (!registerFile) {
      setError("customError", {
        type: "custom",
        message: "Enter a photo for your profile picture!",
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
          {!errorMessages && (
            <Typography visibility="hidden" variant="caption" color="error">
              spaceholder for errors
            </Typography>
          )}
          {errorMessages && (
            <Typography variant="caption" color="error">
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
