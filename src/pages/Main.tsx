import { Box } from "@mui/material";
import { Outlet } from "react-router";
import { Toolbar } from "src/features/toolbar";

export type displayedColumn = "profile" | "posts" | "follows";

export const Main = () => {
  return (
    <>
      <Toolbar />
      <Box mx={{ xs: 1, md: 8 }}>
        <Outlet />
      </Box>
    </>
  );
};
