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

type Props = {
  setShowRegisterWindow: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginWindow = ({ setShowRegisterWindow }: Props) => {
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
          />
          <TextField
            placeholder="Password"
            variant="standard"
            sx={{ my: 2 }}
            fullWidth
          />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="center"
          sx={{ mt: 4, mb: 2 }}
        >
          <Button
            variant="contained"
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
