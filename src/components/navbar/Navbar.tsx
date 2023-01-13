import { useTheme, useMediaQuery } from "@mui/material";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import { displayedColumn } from "../../pages/Main";

type Props = {
  changeColumn: (column: displayedColumn) => void;
};

const Navbar = ({ changeColumn }: Props) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  return mobile ? (
    <MobileNavbar changeColumn={changeColumn} />
  ) : (
    <DesktopNavbar />
  );
};

export default Navbar;
