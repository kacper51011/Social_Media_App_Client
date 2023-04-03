import { CustomIconButton } from "@components";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import axios from "axios";
import { useDispatch } from "react-redux";
import { follow, unfollow } from "@store";
import { useTranslation } from "react-i18next";
import { MouseEventHandler } from "react";
type Props = {
  isUserFollowed: boolean;
  authUserId: string;
  id: string;
  firstName: string;
  lastName: string;
  picturePath: string;
  job: string;
};

export const FollowsItemButton = (props: Props) => {
  const {
    isUserFollowed,
    authUserId,
    id,
    firstName,
    lastName,
    picturePath,
    job,
  } = { ...props };
  const { t } = useTranslation("follows");
  const dispatch = useDispatch();
  const deleteFollow: MouseEventHandler<HTMLButtonElement> = async () => {
    try {
      await axios.patch("/api/user/follow", {
        id: authUserId,
        userToFollowId: id,
      });
    } catch (err) {
      return;
    }
    dispatch(unfollow(id));
  };

  const addFollow: MouseEventHandler<HTMLButtonElement> = async () => {
    try {
      await axios.patch("/api/user/follow", {
        id: authUserId,
        userToFollowId: id,
      });
    } catch (err) {
      return;
    }
    dispatch(
      follow({
        id: id,
        firstName: firstName,
        lastName: lastName,
        picturePath: picturePath,
        job: job,
      })
    );
  };
  return isUserFollowed ? (
    <CustomIconButton
      title={t("unfollow")}
      icon={<PersonRemoveIcon />}
      onClick={deleteFollow}
    />
  ) : (
    <CustomIconButton
      title={t("follow")}
      icon={<PersonAddIcon />}
      onClick={addFollow}
    />
  );
};
