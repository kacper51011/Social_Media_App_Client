import { Box } from "@mui/material";
import { ComponentProps } from "react";

export const homePageStyle: ComponentProps<typeof Box> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
  sx: {
    backgroundImage: "linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)",
  },
};

export const notFoundPageStyle: ComponentProps<typeof Box> = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
