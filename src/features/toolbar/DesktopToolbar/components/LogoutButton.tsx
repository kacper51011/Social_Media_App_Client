import { CustomIconButton } from "@components";
import { useTranslation } from "react-i18next";
import { useLogout } from "src/features/auth";
import LogoutIcon from "@mui/icons-material/Logout";

export const LogoutButton = () => {
  const { t } = useTranslation("navbar");
  const logout = useLogout();
  return (
    <CustomIconButton
      sx={{ px: 3, py: 1.5 }}
      icon={<LogoutIcon />}
      title={t("logout")}
      onClick={() => logout()}
    />
  );
};
