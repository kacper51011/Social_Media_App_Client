import { Avatar, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router";

type Props = {
  userPicturePath: string;
  firstName: string;
  userId: string;
  lastName: string;
};

export const AuthorInfo = ({
  userPicturePath,
  firstName,
  userId,
  lastName,
}: Props) => {
  const navigate = useNavigate();
  return (
    <Box display="flex" justifyContent="left" alignItems="top">
      <Avatar src={`/assets/${userPicturePath}`}>{firstName[0]}</Avatar>

      <Typography
        component="div"
        onClick={() => {
          navigate(`/profile/${userId}`);
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        sx={{ cursor: "pointer" }}
        fontWeight="bold"
        variant="body1"
        ml={1}
      >
        {firstName + " " + lastName}
      </Typography>
    </Box>
  );
};
