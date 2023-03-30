import { useTheme, useMediaQuery } from "@mui/material";
import { MobileNavbar } from "./MobileNavbar";
import { DesktopNavbar } from "./DesktopNavbar";

export const Navbar = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  return mobile ? <MobileNavbar /> : <DesktopNavbar />;
};
