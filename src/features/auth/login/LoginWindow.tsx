import {
  Box,
  useMediaQuery,
  useTheme,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLoginForm } from "./useLoginForm";
import { buttonStyles, formStyles, inputStyles } from "./styles";
import {
  LoginContainer,
  ErrorText,
  LinkToRegister,
  ImageBox,
} from "./components";

export const LoginWindow = () => {
  const { register, errors, formHandle, isSubmitting } = useLoginForm();
  const { t } = useTranslation("loginPage");
  const theme = useTheme();
  const desktopSize = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <LoginContainer>
      <Box component="form" onSubmit={formHandle} {...formStyles}>
        <Typography textAlign="center" fontWeight="bold" variant="h4">
          {t("greeting")}
        </Typography>
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

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="center"
          sx={{ mt: 4, mb: 2 }}
        >
          <ErrorText errorMessage={errors.customError?.message} />
          <Button {...buttonStyles}>{t("button")}</Button>
          <LinkToRegister />
        </Box>
      </Box>
      <ImageBox desktopSize={desktopSize} />
    </LoginContainer>
  );
};
