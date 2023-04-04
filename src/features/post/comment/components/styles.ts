import { Grid, SxProps } from "@mui/material";
import { ComponentProps } from "react";

export const itemContainerStyle: ComponentProps<typeof Grid> = {
  container: true,
  direction: "row",
  justifyContent: "space-between",
  alignItems: "center",
  my: 1,
};

export const contentContainerStyle: SxProps = {
  py: 1,
  mt: 0.25,
  px: 1,
  width: "fit-content",
  borderRadius: "16px",
};
