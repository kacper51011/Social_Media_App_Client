import { useTheme, useMediaQuery } from "@mui/material";
import { MobileNavbar } from "../../components/navbar/MobileNavbar";
import { DesktopNavbar } from "../../components/navbar/DesktopNavbar";

export const Toolbar = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  return mobile ? <MobileNavbar /> : <DesktopNavbar />;
};
