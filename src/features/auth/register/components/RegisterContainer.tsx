import { RegisterWindowImage } from "@assets";
import { LanguageChangeButton } from "@components";
import { Paper, Box } from "@mui/material";
import { PropsWithChildren } from "react";

export const RegisterContainer = ({ children }: PropsWithChildren) => {
  return (
    <Paper
      elevation={4}
      sx={{
        minHeight: { xs: 0.6, lg: 0.9 },
        width: { xs: 0.95, lg: 0.9 },
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
