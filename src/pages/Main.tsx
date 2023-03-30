import { Box } from "@mui/material";
import { Navbar } from "../components/navbar/Navbar";
import { Outlet } from "react-router";

export type displayedColumn = "profile" | "posts" | "follows";

export const Main = () => {
  return (
    <>
      <Navbar />
      <Box mx={{ xs: 1, md: 8 }}>
        <Outlet />
      </Box>
    </>
  );
};
