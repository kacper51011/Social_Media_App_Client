import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CustomIconButton from "../buttons/CustomIconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { Stack, useTheme, Box } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import PeopleIcon from "@mui/icons-material/People";
import { useDispatch } from "react-redux";
import { setMode } from "../../store/themeSlice";
import MobileMenu from "./MobileMenu";
import useLogout from "../../hooks/useLogout";
import {
  setToFollowsColumn,
  setToPostsColumn,
  setToProfileColumn,
} from "../../store/columnSlice";
import { useTranslation } from "react-i18next";

const MobileNavbar = () => {
  const theme = useTheme();
  const logout = useLogout();
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const toggleMode = () => {
    dispatch(setMode());
  };

  return (
    <Box sx={{ backgroundColor: theme.palette.neutral.light }}>
      <AppBar
        color="inherit"
        position="fixed"
        sx={{
          top: "auto",
          bottom: 0,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <MobileMenu toggleMode={toggleMode} />

          <Stack direction="row">
            <CustomIconButton
              onClick={() => dispatch(setToProfileColumn())}
              icon={<PersonIcon />}
              title={t("profileColumn")}
            />
            <CustomIconButton
              onClick={() => dispatch(setToPostsColumn())}
              icon={<ArticleIcon />}
              title={t("postsColumn")}
            />
            <CustomIconButton
              onClick={() => dispatch(setToFollowsColumn())}
              icon={<PeopleIcon />}
              title={t("followsColumn")}
            />
          </Stack>

          <CustomIconButton
            onClick={() => logout()}
            icon={<LogoutIcon />}
            title={t("logout")}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MobileNavbar;
