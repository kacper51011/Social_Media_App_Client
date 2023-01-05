import { Grid, useTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export type FollowProps = {
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
}: FollowProps) => {
  const theme = useTheme();
  return (
    <Grid
      container
      width="1"
      py={0.25}
      px={0.75}
      justifyContent="space-between"
      alignItems="center"
      sx={{ backgroundColor: theme.palette.neutral.light }}
    >
      <Grid item xs={3}>
        <Avatar src={photo || ""}>{firstName[0]}</Avatar>
      </Grid>
      <Grid item xs={7} flexDirection="column">
        <Typography variant="subtitle1">
          {firstName + " " + lastName}
        </Typography>
        <Typography variant="caption">{job}</Typography>
      </Grid>

      <Grid item xs={2}>
        <PersonAddIcon onClick={followFunction} />
      </Grid>
    </Grid>
  );
};

export default FollowedPersonItem;
