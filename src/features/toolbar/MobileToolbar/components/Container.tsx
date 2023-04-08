import { AppBar, Box, Toolbar, useTheme } from "@mui/material";
import { PropsWithChildren } from "react";

export const Container = ({ children }: PropsWithChildren) => {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.neutral.light }}>
      <AppBar
        color="inherit"
        position="fixed"
        sx={{
          top: "auto",
          bottom: 0,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {children}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
