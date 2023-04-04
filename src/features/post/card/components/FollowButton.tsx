import { CustomIconButton } from "@components";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import { MouseEventHandler } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  isFollowing: boolean;
};

export const FollowButton = ({ isFollowing, onClick }: Props) => {
  const { t } = useTranslation();
  return (
    <CustomIconButton
      title={isFollowing ? t("buttonUnfollow") : t("buttonFollow")}
      onClick={onClick}
      icon={
        isFollowing ? (
          <PersonRemoveIcon color="primary" />
        ) : (
          <PersonAddIcon color="primary" />
        )
      }
    />
  );
};
