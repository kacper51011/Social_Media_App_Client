import { Paper } from "@mui/material";
import { PropsWithChildren } from "react";

export const CardContainer = ({ children }: PropsWithChildren) => {
  return (
    <Paper
      elevation={2}
      aria-label="Authorized user section"
      sx={{
        minWidth: 1,
        p: "calc(0.5vw + 10px)",
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        mb: 5,
      }}
    >
      {children}
    </Paper>
  );
};
