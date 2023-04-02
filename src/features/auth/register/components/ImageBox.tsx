import { RegisterWindowImage } from "@assets";
import { Box, useMediaQuery, useTheme } from "@mui/material";

export const ImageBox = () => {
  const theme = useTheme();
  const desktopSize = useMediaQuery(theme.breakpoints.up("md"));
  return desktopSize ? (
    <Box width={0.5} display="flex" justifyContent="center" alignItems="center">
      <RegisterWindowImage width="90%" />
    </Box>
  ) : null;
};
