import { LanguageChangeButton } from "@components";
import { Paper, Box } from "@mui/material";
import { PropsWithChildren } from "react";

export const LoginContainer = ({ children }: PropsWithChildren) => {
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
      {children}
    </Paper>
  );
};
