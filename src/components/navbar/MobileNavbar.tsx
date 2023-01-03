import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CustomIconButton from "../CustomIconButton";
import MenuIcon from "@mui/icons-material/Menu";

import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { Stack } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import PeopleIcon from "@mui/icons-material/People";
import { displayedColumn } from "../../pages/Main";

type Props = {
  darkMode: boolean;
  changeColumn: (column: displayedColumn) => void;
};

const MobileNavbar = ({ darkMode, changeColumn }: Props) => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
        <CustomIconButton icon={<MenuIcon />} title="menu" />

        <Stack direction="row">
          <CustomIconButton
            onClick={() => changeColumn("profile")}
            icon={<PersonIcon />}
            title="profile"
          />
          <CustomIconButton
            onClick={() => changeColumn("posts")}
            icon={<ArticleIcon />}
            title="posts"
          />
          <CustomIconButton
            onClick={() => changeColumn("follows")}
            icon={<PeopleIcon />}
            title="follows"
          />
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
