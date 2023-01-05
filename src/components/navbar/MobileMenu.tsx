import { useState } from "react";
import CustomIconButton from "../buttons/CustomIconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem, useTheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SmartToyIcon from "@mui/icons-material/SmartToy";

type Props = {
  toggleMode: () => void;
};

const MobileMenu = ({ toggleMode }: Props) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const darkMode = true;
  return (
    <>
      <CustomIconButton
        icon={<MenuIcon />}
        title="menu"
        aria-controls={open ? "mobile-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />
      <Menu
        id="mobile-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => toggleMode()}>
          Change mode
          {theme.palette.mode === "light" ? (
            <LightModeIcon sx={{ ml: 2 }} />
          ) : (
            <DarkModeIcon sx={{ ml: 2 }} />
          )}
        </MenuItem>
        <MenuItem>
          Use voice helper <SmartToyIcon sx={{ ml: 2 }} />
        </MenuItem>
      </Menu>
    </>
  );
};

export default MobileMenu;
