import { Grid, Paper } from "@mui/material";
import { ComponentProps } from "react";

export const itemContainerStyle: ComponentProps<typeof Grid> = {
  container: true,
  width: 1,
  py: 0.25,
  px: 0.75,
  my: 1,
  justifyContent: "space-between",
  alignItems: "center",
};

export const cardContainerStyle: ComponentProps<typeof Paper> = {
  elevation: 2,
  sx: {
    width: 1,
    minHeight: "50vh",
    display: "flex",
    flexDirection: "column",
    borderRadius: "16px",
    p: "calc(0.5vw + 10px)",
  },
};
