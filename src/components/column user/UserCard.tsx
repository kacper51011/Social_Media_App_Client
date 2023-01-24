import { Avatar, Box, Divider, Grid, Paper, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

type Props = {
  photo: string;
  firstName: string;
  lastName: string;
  followedPeopleNumber: number;
  location: string;
  job: string;
  numberOfProfileViews: number;
  numberOfLikes: number;
};

const UserCard = ({
  photo,
  firstName,
  lastName,
  followedPeopleNumber,
  location,
  job,
  numberOfProfileViews,
  numberOfLikes,
}: Props) => {
  return (
    <Paper
      elevation={2}
      sx={{
        minWidth: 1,

        p: "calc(0.5vw + 10px)",
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
      }}
    >
      <Grid container width="1" direction="row" alignItems="center">
        <Grid item xs={2.5}>
          <Avatar src={`/assets/${photo}`}>{firstName[0]}</Avatar>
        </Grid>

        <Grid sx={{ flexDirection: "column", justifyContent: "center" }}>
          <Typography
            fontWeight={600}
            sx={{ cursor: "pointer" }}
            variant="body1"
          >
            {firstName + " " + lastName}
          </Typography>
          <Typography variant="caption">
            {`${followedPeopleNumber} Follows`}
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ my: 1 }} />
      <Box my={1} mx={0.5} display="flex">
        <PlaceIcon color="primary" />
        <Typography ml={4} variant="caption">
          {location}
        </Typography>
      </Box>
      <Box my={1} mx={0.5} display="flex">
        <BusinessCenterIcon color="primary" />
        <Typography ml={4} variant="caption">
          {job}
        </Typography>
      </Box>

      <Divider sx={{ my: 1 }} />
      <Grid container direction="column" py={1}>
        <Grid
          container
          direction="row"
          sx={{ justifyContent: "space-between" }}
        >
          <Grid item py={1}>
            <Typography variant="caption">Profile views</Typography>
          </Grid>
          <Grid item py={1}>
            <Typography> {numberOfProfileViews}</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          sx={{ justifyContent: "space-between" }}
        >
          <Grid item py={1}>
            <Typography variant="caption">Likes under your posts</Typography>
          </Grid>
          <Grid item py={1}>
            <Typography>{numberOfLikes}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserCard;
