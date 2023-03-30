import { Grid, useTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useAppSelector } from "../../hooks/reduxHooks";
import { follow, Following, unfollow } from "../../store/authSlice";
import CustomIconButton from "../buttons/CustomIconButton";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

export type FollowProps = {
  followedPerson: Following;
};

const FollowedPersonItem = ({ followedPerson }: FollowProps) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const authUser = useAppSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const { t } = useTranslation("follows");
  const { id, firstName, lastName, picturePath, job } = followedPerson;

  const isUserFollowed = authUser?.followingIDs.includes(id);

  const deleteFollow = async () => {
    try {
      await axios.patch("/api/user/follow", {
        id: authUser!.id,
        userToFollowId: id,
      });
    } catch (err) {
      return;
    }
    dispatch(unfollow(id));
  };

  const addFollow = async () => {
    try {
      await axios.patch("/api/user/follow", {
        id: authUser!.id,
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

  return (
    <Grid
      container
      width={1}
      py={0.25}
      px={0.75}
      my={1}
      justifyContent="space-between"
      alignItems="center"
      sx={{
        backgroundColor: theme.palette.neutral.light,
        borderRadius: "16px",
      }}
    >
      <Grid marginRight={1} item xs={3}>
        <Avatar src={`/assets/${picturePath}` || ""}>{firstName[0]}</Avatar>
      </Grid>
      <Grid item xs={6} flexDirection="column">
        <Typography
          sx={{ cursor: "pointer" }}
          variant="subtitle1"
          fontWeight="600"
          component="div"
          onClick={() => {
            navigate(`/profile/${id}`);
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          {firstName + " " + lastName}
        </Typography>
        <Typography variant="caption">{job}</Typography>
      </Grid>

      <Grid item xs={2}>
        {isUserFollowed && (
          <CustomIconButton
            title={t("unfollow")}
            icon={<PersonRemoveIcon />}
            onClick={() => {
              deleteFollow();
            }}
          />
        )}
        {!isUserFollowed && (
          <CustomIconButton
            title={t("follow")}
            icon={<PersonAddIcon />}
            onClick={() => {
              addFollow();
            }}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default FollowedPersonItem;
