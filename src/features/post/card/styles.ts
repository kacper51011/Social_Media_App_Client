import { Paper, Typography } from "@mui/material";
import { ComponentProps } from "react";

export const ItemContainerStyle: ComponentProps<typeof Paper> = {
  elevation: 2,
  sx: {
    display: "flex",
    flexDirection: "column",
    p: { xs: 1, md: 2 },
    borderRadius: "16px",
    mb: 5,
  },
};
export const commentsDisplayStyle: ComponentProps<typeof Typography> = {
  variant: "caption",
  sx: { cursor: "pointer" },
};
