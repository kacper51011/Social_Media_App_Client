import { CustomIconButton } from "@components";
import { Stack } from "@mui/material";
import { setColumn } from "@store";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import PeopleIcon from "@mui/icons-material/People";

export const ColumnsChangeButtons = () => {
  const { t } = useTranslation("navbar");
  const dispatch = useDispatch();
  return (
    <Stack direction="row">
      <CustomIconButton
        onClick={() => dispatch(setColumn("profile"))}
        icon={<PersonIcon />}
        title={t("profileColumn")}
      />
      <CustomIconButton
        onClick={() => dispatch(setColumn("posts"))}
        icon={<ArticleIcon />}
        title={t("postsColumn")}
      />
      <CustomIconButton
        onClick={() => dispatch(setColumn("follows"))}
        icon={<PeopleIcon />}
        title={t("followsColumn")}
      />
    </Stack>
  );
};
