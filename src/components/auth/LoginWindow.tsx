import { ReactComponent as LoginWindowImage } from "../../assets/LoginWindowImage.svg";
import {
  Paper,
  Box,
  useMediaQuery,
  useTheme,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserLoginSchema } from "../../utils/ValidationSchemas";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setLogin } from "../../store/authSlice";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import LanguageChangeButton from "../buttons/LanguageChangeButton";

type UserLoginType = z.infer<typeof UserLoginSchema>;

const LoginWindow = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation("loginPage");

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<UserLoginType & { customError: string }>({
    resolver: zodResolver(UserLoginSchema),
  });

  const onSubmit: SubmitHandler<UserLoginType> = async (data) => {
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

  const theme = useTheme();
  const desktopSize = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Paper
      elevation={4}
      sx={{
        minHeight: { xs: 0.5, lg: 0.9 },
        width: 0.9,
        borderRadius: "16px",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box position="absolute" display="flex" justifyContent="center" mx="auto">
        <LanguageChangeButton />
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        width={{ xs: 0.9, lg: 0.5 }}
        display="flex"
        height={1}
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        pt={5}
        px={6}
        pb={2}
      >
        <Typography textAlign="center" fontWeight="bold" variant="h4">
          {t("greeting")}
        </Typography>
        <Box my={3}>
          <TextField
            placeholder="Email"
            variant="standard"
            sx={{ my: 2 }}
            fullWidth
            {...register("email")}
            disabled={isSubmitting}
          />
          <TextField
            variant="standard"
            type="password"
            label={t("password")}
            sx={{ my: 2 }}
            fullWidth
            {...register("password")}
            disabled={isSubmitting}
          />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="center"
          sx={{ mt: 4, mb: 2 }}
        >
          {/* spaceholder */}
          <Typography variant="caption" visibility="hidden">
            spaceholder for errors
          </Typography>
          {errors.customError?.message && (
            <Typography variant="caption" color="error" fontWeight="bold">
              {errors.customError.message}
            </Typography>
          )}
          <Button
            variant="contained"
            type="submit"
            sx={{
              width: 0.3,
              py: 1.5,
              px: 7,
              color: "white",
              mb: 2,
              whiteSpace: "nowrap",
            }}
          >
            {t("button")}
          </Button>
          <Typography
            sx={{
              cursor: "pointer",
            }}
            fontWeight="700"
            component="span"
            variant="subtitle1"
            textAlign="center"
            onClick={() => navigate("/register")}
            whiteSpace="nowrap"
          >
            {t("link")}
          </Typography>
        </Box>
      </Box>
      {desktopSize && (
        <Box
          width={0.5}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <LoginWindowImage width="90%" />
        </Box>
      )}
    </Paper>
  );
};

export default LoginWindow;
