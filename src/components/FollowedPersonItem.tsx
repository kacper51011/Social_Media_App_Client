import { Box, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

type Props = {
  photo?: string;
  firstName: string;
  lastName: string;
  job: string;
  followFunction: React.MouseEventHandler;
};

const FollowedPersonItem = ({
  firstName,
  lastName,
  followFunction,
  job,
  photo,
}: Props) => {
  return (
    <Grid
      container
      width="0.8"
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Grid item xs={3}>
        <Avatar src={photo || ""}>{firstName[0]}</Avatar>
      </Grid>
      <Grid item xs={3} direction="column">
        <Typography variant="h4">{firstName + " " + lastName}</Typography>
        <Typography variant="subtitle1">{job}</Typography>
      </Grid>

      <Grid item xs={3}>
        <PersonAddIcon onClick={followFunction} />
      </Grid>
    </Grid>
  );
};

export default FollowedPersonItem;
