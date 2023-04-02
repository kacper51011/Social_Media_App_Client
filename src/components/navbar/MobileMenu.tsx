import { useState, MouseEvent } from "react";
import { CustomIconButton } from "../../shared/components/CustomIconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem, useTheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate, useParams } from "react-router";
import { useScrollToTop } from "../../shared/hooks/useScrollToTop";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useTranslation } from "react-i18next";
import { UKFlag, PLFlag } from "@assets";

type Props = {
  toggleMode: () => void;
};

export const MobileMenu = ({ toggleMode }: Props) => {
  let { id } = useParams();
  const theme = useTheme();
  const navigate = useNavigate();
  const [visible, scrollToTop] = useScrollToTop();
  const { t, i18n } = useTranslation("navbar");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
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
          {t("mobileTheme")}
          {theme.palette.mode === "light" ? (
            <LightModeIcon sx={{ ml: 2 }} />
          ) : (
            <DarkModeIcon sx={{ ml: 2 }} />
          )}
        </MenuItem>

        {id && (
          <MenuItem
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              setTimeout(() => navigate("/"), 1000);
            }}
          >
            {t("home")} <HomeIcon sx={{ ml: 2 }} />
          </MenuItem>
        )}
        {visible && (
          <MenuItem onClick={scrollToTop}>
            {t("scroll")} <ArrowUpwardIcon sx={{ ml: 2 }} />
          </MenuItem>
        )}
        <MenuItem
          onClick={() => {
            i18n.language === "en"
              ? i18n.changeLanguage("pl")
              : i18n.changeLanguage("en");
          }}
        >
          {t("changeLanguage")}{" "}
          {i18n.language === "en" ? (
            <UKFlag height="15px" width="35px" style={{ marginLeft: "auto" }} />
          ) : (
            <PLFlag height="15px" width="35px" style={{ marginLeft: "auto" }} />
          )}
        </MenuItem>
      </Menu>
    </>
  );
};
