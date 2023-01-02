import { Paper, Grid, Avatar, Typography } from "@mui/material";
import CustomIconButton from "./CustomIconButton";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

type Props = {
  photo: string;
  firstName: string;
  lastName: string;
  location: string;
  isFollowed: boolean;
};

const PostItem = ({
  photo,
  firstName,
  lastName,
  location,
  isFollowed,
}: Props) => {
  return (
    <Paper sx={{ display: "flex", flexDirection: "column", minWidth: "30vh" }}>
      <Grid
        container
        py={1}
        width="1"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid>
          <Grid item>
            <Avatar src={photo || ""}>{firstName[0]}</Avatar>
          </Grid>
          <Grid item direction="column">
            <Typography variant="h6">{firstName + " " + lastName}</Typography>
            <Typography variant="caption">{location}</Typography>
          </Grid>
        </Grid>

        <Grid item>
          <CustomIconButton
            title="follow"
            icon={isFollowed ? <PersonRemoveIcon /> : <PersonAddIcon />}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PostItem;
