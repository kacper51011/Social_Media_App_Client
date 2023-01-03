import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CustomIconButton from "../CustomIconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { Stack } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import PeopleIcon from "@mui/icons-material/People";
type Props = {
  darkMode: boolean;
};

const MobileNavbar = ({ darkMode }: Props) => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
        <CustomIconButton icon={<MenuIcon />} title="menu" />
        <Stack direction="row">
          <CustomIconButton icon={<PersonIcon />} title="profile" />
          <CustomIconButton icon={<ArticleIcon />} title="posts" />
          <CustomIconButton icon={<PeopleIcon />} title="follows" />
        </Stack>
        <CustomIconButton icon={<LogoutIcon />} title="logout" />
      </Toolbar>
    </AppBar>
  );
};

export default MobileNavbar;
{
  /* <CustomIconButton
          icon={darkMode ? <DarkModeIcon /> : <LightModeIcon />}
          title={darkMode ? "dark mode" : "light mode"}
        /> */
}
