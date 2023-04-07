import Box from "@mui/material/Box";
import { homePageStyle } from "@styles";

import { Outlet } from "react-router";

export const Home = () => {
  return (
    <Box {...homePageStyle}>
      <Outlet />
    </Box>
  );
};
