import { Box, SxProps } from "@mui/material";
import { ComponentProps } from "react";

export const dropzoneBoxStyle: ComponentProps<typeof Box> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "calc(3.5vw + 35px)",
};

export const dropzoneSxProps: SxProps = {
  borderRadius: "16px",
  borderStyle: "dashed",
  opacity: 0.7,
};
