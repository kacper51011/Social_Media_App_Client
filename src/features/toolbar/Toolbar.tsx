import { useTheme, useMediaQuery } from "@mui/material";
import { MobileToolbar } from "./MobileToolbar";
import { DesktopToolbar } from "./DesktopToolbar";

export const Toolbar = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  return mobile ? <MobileToolbar /> : <DesktopToolbar />;
};
