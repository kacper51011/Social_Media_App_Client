import { Typography } from "@mui/material";
import { MouseEventHandler } from "react";
import { useNavigate } from "react-router";

type Props = {
  id: string;
  firstName: string;
  lastName: string;
};

export const NameLink = ({ id, firstName, lastName }: Props) => {
  const navigate = useNavigate();

  const navigateWithScroll: MouseEventHandler<HTMLDivElement> = () => {
    navigate(`/profile/${id}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <Typography
      sx={{ cursor: "pointer" }}
      variant="subtitle1"
      fontWeight="600"
      component="div"
      onClick={navigateWithScroll}
    >
      {firstName + " " + lastName}
    </Typography>
  );
};
