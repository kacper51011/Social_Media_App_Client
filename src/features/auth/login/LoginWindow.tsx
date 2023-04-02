import { Box, TextField, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLoginForm } from "./useLoginForm";
import {
  actionsContainerStyles,
  buttonStyles,
  formStyles,
  inputStyles,
} from "./styles";
import {
  LoginContainer,
  ErrorText,
  LinkToRegister,
  ImageBox,
  Greeting,
} from "./components";

export const LoginWindow = () => {
  const { register, errors, formHandle, isSubmitting } = useLoginForm();
  const { t } = useTranslation("loginPage");

  return (
    <LoginContainer>
      <Box component="form" onSubmit={formHandle} {...formStyles}>
        <Greeting />
        <Box my={3}>
          <TextField
            label="Email"
            {...register("email")}
            disabled={isSubmitting}
            {...inputStyles}
          />
          <TextField
            type="password"
            label={t("password")}
            {...register("password")}
            disabled={isSubmitting}
            {...inputStyles}
          />
        </Box>

        <Box {...actionsContainerStyles}>
          <ErrorText errorMessage={errors.customError?.message} />
          <Button {...buttonStyles}>{t("button")}</Button>
          <LinkToRegister />
        </Box>
      </Box>
      <ImageBox />
    </LoginContainer>
  );
};
