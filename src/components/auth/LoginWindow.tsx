import { Box, Paper } from "@mui/material";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import CustomDropzone from "../CustomDropzone";

const LoginWindow = () => {
  const [registerFile, setRegisterFile] = useState<File | null>(null);
  return (
    <Paper
      elevation={4}
      sx={{
        minHeight: "40vw",
        minWidth: "70vw",
        borderRadius: "16px",
        display: "flex",
      }}
    >
      <Box width={0.5}>asd</Box>

      <Box width={0.5} display="flex" flexDirection="column" py={4} px={6}>
        <Typography textAlign="center" fontWeight="bold" variant="h4">
          Join&nbsp;to&nbsp;us!
        </Typography>
        {/* firstName and lastName row */}
        <Box display="flex">
          <TextField
            label="First Name"
            variant="standard"
            fullWidth
          ></TextField>
          <Box width={0.1} />
          <TextField label="Last Name" variant="standard" fullWidth></TextField>
        </Box>
        {/* Location and Job row */}
        <Box display="flex">
          <TextField
            sx={{ my: 1 }}
            variant="standard"
            label="Location"
            fullWidth
          ></TextField>
          <Box width={0.1} />
          <TextField
            sx={{ my: 1 }}
            variant="standard"
            label="Job"
            fullWidth
          ></TextField>
        </Box>
        {/* email */}
        <TextField
          variant="standard"
          sx={{ my: 1 }}
          label="Email"
          fullWidth
        ></TextField>
        {/* password row */}
        <Box display="flex">
          <TextField
            sx={{ my: 1 }}
            variant="standard"
            label="Password"
            fullWidth
          ></TextField>
          <Box width={0.1} />
          <TextField
            sx={{ my: 1 }}
            variant="standard"
            label="ConfirmPassword"
            fullWidth
          ></TextField>
        </Box>

        <CustomDropzone
          mt={3}
          fileToSend={registerFile}
          setFileToSend={setRegisterFile}
        />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="flex-end"
          flexGrow="1"
        >
          <Button
            variant="contained"
            sx={{
              width: 0.3,
              py: 1.5,
              px: 4,
              color: "white",
            }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default LoginWindow;
