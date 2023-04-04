import { Box, Button } from "@mui/material";
import { ComponentProps } from "react";

export const buttonStyle: ComponentProps<typeof Button> = {
  type: "submit",
  variant: "contained",
  sx: {
    minWidth: 0.3,
    py: 1.5,
    px: 7,
    color: "white",
    mb: 2,
    whiteSpace: "pre",
  },
};
export const formStyle: ComponentProps<typeof Box> = {
  width: { xs: 1, lg: 0.5 },
  height: 1,
  display: "flex",
  flexDirection: "column",
  py: 4,
  px: { xs: 2, lg: 6 },
};

export const actionsContainerStyles: ComponentProps<typeof Box> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
  sx: { mb: 2 },
};
