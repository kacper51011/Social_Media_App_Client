import { useTheme, useMediaQuery } from "@mui/material";
import { MobileNavbar } from "./MobileToolbar/MobileNavbar";
import { DesktopNavbar } from "./DesktopToolbar/DesktopNavbar";

export const Toolbar = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  return mobile ? <MobileNavbar /> : <DesktopNavbar />;
};
