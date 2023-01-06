import { Box, Paper } from "@mui/material";
import Divider from "@mui/material/Divider";
import InputBase from "@mui/material/InputBase";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const LoginWindow = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        minHeight: "40vw",
        minWidth: "60vw",
        borderRadius: "16px",
        display: "flex",
      }}
    >
      <Box width={0.5}>asd</Box>

      <Box
        width={0.5}
        display="flex"
        flexDirection="column"
        alignItems="center"
        py={2}
        px={6}
      >
        <Typography fontWeight="bold" variant="h5">
          Join to us!
        </Typography>
        <Box display="flex" justifyContent="flex-between">
          <TextField
            label="First Name"
            variant="standard"
            fullWidth
          ></TextField>
          <Box width={0.1} />
          <TextField label="Last Name" variant="standard" fullWidth></TextField>
        </Box>

        <TextField variant="standard"></TextField>
        <TextField variant="standard"></TextField>
        <TextField variant="standard"></TextField>
        <TextField variant="standard"></TextField>
      </Box>
    </Paper>
  );
};

export default LoginWindow;
