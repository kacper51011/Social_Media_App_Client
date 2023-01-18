import { Grid, useTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useAppSelector } from "../../hooks/reduxHooks";
import { unfollow } from "../../store/authSlice";
import CustomIconButton from "../buttons/CustomIconButton";

export type FollowProps = {
  id: string;
  photo: string;
  firstName: string;
  lastName: string;
  job: string;
};

const FollowedPersonItem = ({
  id,
  firstName,
  lastName,
  job,
  photo,
}: FollowProps) => {
  const theme = useTheme();
  const authUser = useAppSelector((state) => state.auth.user);
  const dispatch = useDispatch();

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

  return (
    <Grid
      container
      width="1"
      py={0.25}
      px={0.75}
      justifyContent="space-between"
      alignItems="center"
      sx={{
        backgroundColor: theme.palette.neutral.light,
        borderRadius: "16px",
      }}
    >
      <Grid marginRight={1} item xs={3}>
        <Avatar src={`assets/${photo}` || ""}>{firstName[0]}</Avatar>
      </Grid>
      <Grid item xs={6} flexDirection="column">
        <Typography sx={{ cursor: "pointer" }} variant="subtitle1">
          {firstName + " " + lastName}
        </Typography>
        <Typography variant="caption">{job}</Typography>
      </Grid>

      <Grid item xs={2}>
        <CustomIconButton
          title={"unfollow"}
          icon={<PersonRemoveIcon />}
          onClick={() => {
            deleteFollow();
          }}
        />
      </Grid>
    </Grid>
  );
};

export default FollowedPersonItem;
