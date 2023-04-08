import { Typography, useTheme } from "@mui/material";
import { MouseEventHandler } from "react";
import { useNavigate } from "react-router";

export const TitleLink = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const scrollAndRedirect: MouseEventHandler<HTMLHeadingElement> = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setTimeout(() => navigate("/"), 500);
  };
  return (
    <Typography
      variant="h5"
      component="h1"
      aria-label="back to top of main page"
      mr={5}
      onClick={scrollAndRedirect}
      fontWeight="500"
      sx={{ cursor: "pointer" }}
      color={theme.palette.neutral.dark}
    >
      SocialMediaApp
    </Typography>
  );
};
