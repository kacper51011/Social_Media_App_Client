import { Box, Button, TextField } from "@mui/material";
import { CustomDropzone } from "@components";
import { useTranslation } from "react-i18next";
import {
  ErrorText,
  ImageBox,
  LoginLink,
  RegisterContainer,
  Greeting,
} from "./components";
import { buttonStyle, formStyle } from "./styles";
import { useRegisterForm } from "./useRegisterForm";

export const RegisterWindow = () => {
  const { t } = useTranslation("registerPage");
  const {
    register,
    isSubmitting,
    formHandle,
    registerFile,
    setRegisterFile,
    errorMessages,
  } = useRegisterForm();

  return (
    <RegisterContainer>
      <ImageBox />
      <Box component="form" onSubmit={formHandle} {...formStyle}>
        <Greeting />
        {/* firstName and lastName row */}
        <Box display="flex">
          <TextField
            label={t("firstName")}
            variant="standard"
            sx={{ width: 0.45 }}
            disabled={isSubmitting}
            {...register("firstName")}
          ></TextField>
          <Box width={0.1} />
          <TextField
            label={t("lastName")}
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
            label={t("location")}
            disabled={isSubmitting}
            {...register("location")}
          ></TextField>
          <Box width={0.1} />
          <TextField
            sx={{ my: 1, width: 0.45 }}
            variant="standard"
            label={t("job")}
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
            label={t("password")}
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
            label={t("confirmPassword")}
            disabled={isSubmitting}
            {...register("confirmPassword")}
            fullWidth
          ></TextField>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <CustomDropzone
            width={1}
            mt={3}
            fileToSend={registerFile}
            setFileToSend={setRegisterFile}
            holdSpace
          />
        </Box>

        <Box>
          <ErrorText errorMessage={errorMessages} />
          <Button {...buttonStyle} disabled={isSubmitting}>
            {t("button")}
          </Button>

          <LoginLink />
        </Box>
      </Box>
    </RegisterContainer>
  );
};
