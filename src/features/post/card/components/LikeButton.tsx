import { CustomIconButton } from "@components";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { useTranslation } from "react-i18next";
import { MouseEventHandler } from "react";

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  isLiked: boolean;
};

export const LikeButton = ({ onClick, isLiked }: Props) => {
  const { t } = useTranslation("posts");

  return (
    <CustomIconButton
      title={isLiked ? t("buttonLike") : t("buttonUnlike")}
      onClick={onClick}
      icon={
        isLiked ? (
          <ThumbDownAltIcon color="primary" />
        ) : (
          <ThumbUpAltIcon color="primary" />
        )
      }
    />
  );
};
