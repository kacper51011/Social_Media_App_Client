import { useState } from "react";
import CustomIconButton from "../buttons/CustomIconButton";
import MenuIcon from "@mui/icons-material/Menu";

const MenuItem = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <CustomIconButton
        icon={<MenuIcon />}
        title="menu"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />
    </>
  );
};

export default MenuItem;
