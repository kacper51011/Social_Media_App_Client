import { CustomIconButton } from "@components";
import { useTranslation } from "react-i18next";
import { useLogout } from "src/features/auth";
import LogoutIcon from "@mui/icons-material/Logout";

export const LogoutButton = () => {
  const logout = useLogout();
  const { t } = useTranslation("navbar");
  return (
    <CustomIconButton
      onClick={() => logout()}
      icon={<LogoutIcon />}
      title={t("logout")}
    />
  );
};
