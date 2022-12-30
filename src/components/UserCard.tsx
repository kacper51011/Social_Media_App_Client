import { Avatar, Box, Divider, Paper, Typography } from "@mui/material";

type Props = {
  photo: string;
  firstName: string;
  lastName: string;
  followedPeopleNumber: number;
};

const UserCard = ({
  photo,
  firstName,
  lastName,
  followedPeopleNumber,
}: Props) => {
  return (
    <Paper
      sx={{ p: "calc(2vw + 10px)", display: "flex", flexDirection: "column" }}
    >
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
          <Typography variant="subtitle1">
            {followedPeopleNumber + "follows"}
          </Typography>
        </Box>
      </Box>
      <Divider />
    </Paper>
  );
};

export default UserCard;
