import { Box, AppBar, Toolbar, useTheme } from "@mui/material";
import { PropsWithChildren } from "react";

export const Container = ({ children }: PropsWithChildren) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: 1,
        backgroundColor: theme.palette.secondary.dark,
      }}
    >
      <AppBar color="inherit">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mx: 1,
          }}
        >
          {children}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
