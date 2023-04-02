import { Box, Button, TextField } from "@mui/material";
import { ComponentProps } from "react";

export const formStyles: ComponentProps<typeof Box> = {
  width: { xs: 0.9, lg: 0.5 },
  display: "flex",
  height: 1,
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  pt: 5,
  px: 6,
  pb: 2,
};

export const inputStyles: ComponentProps<typeof TextField> = {
  fullWidth: true,
  sx: { my: 2 },
  variant: "standard",
};

export const buttonStyles: ComponentProps<typeof Button> = {
  variant: "contained",
  type: "submit",
  sx: {
    width: 0.3,
    py: 1.5,
    px: 7,
    color: "white",
    mb: 2,
    whiteSpace: "nowrap",
  },
};

export const actionsContainerStyles: ComponentProps<typeof Box> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
  sx: { mt: 4, mb: 2 },
};
