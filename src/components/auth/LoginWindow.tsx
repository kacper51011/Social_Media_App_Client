import { ReactComponent as LoginWindowImage } from "../../utils/LoginWindowImage.svg";
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

type Props = {
  setShowRegisterWindow: React.Dispatch<React.SetStateAction<boolean>>;
};

type UserLoginType = z.infer<typeof UserLoginSchema>;

const LoginWindow = ({ setShowRegisterWindow }: Props) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserLoginType>({
    resolver: zodResolver(UserLoginSchema),
  });

  const onSubmit: SubmitHandler<UserLoginType> = (data) => {
    console.log(data);
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
      }}
    >
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
          Welcome&nbsp;back!
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
            placeholder="Password"
            variant="standard"
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
          <Button
            variant="contained"
            type="submit"
            sx={{
              width: 0.3,
              py: 1.5,
              px: 7,
              color: "white",
              mb: 2,
            }}
          >
            Login
          </Button>
          <Typography
            sx={{ cursor: "pointer" }}
            fontWeight="700"
            component="span"
            variant="subtitle1"
            textAlign="center"
            onClick={() => setShowRegisterWindow(true)}
          >
            You&nbsp;don`t&nbsp;have&nbsp;account&nbsp;yet? Click&nbsp;here!
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
