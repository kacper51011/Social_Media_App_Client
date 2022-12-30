import { Box } from "@mui/material";
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
    <Box
      display="flex"
      width="0.8"
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Avatar src={photo || ""}>{firstName[0]}</Avatar>
      <Box sx={{ flexDirection: "column" }}>
        <Typography variant="h4">{firstName + " " + lastName}</Typography>
        <Typography variant="subtitle1">{job}</Typography>
      </Box>
      <PersonAddIcon onClick={followFunction} />
    </Box>
  );
};

export default FollowedPersonItem;