import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LogoutIcon from "@mui/icons-material/Logout";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { useState } from "react";
import CustomIconButton from "./CustomIconButton";

const Navbar = () => {
  const [darkMode, toggleDarkMode] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">SocialMediaApp</Typography>
          <Stack direction="row" width="15%" justifyContent="space-between">
            <IconButton>
              {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
            <IconButton aria-label="voice helper">
              <SmartToyIcon />
            </IconButton>
            <IconButton aria-label="logout">
              <LogoutIcon />
            </IconButton>
            <CustomIconButton icon={<LogoutIcon />} title="logout" />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
