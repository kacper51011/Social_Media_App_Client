import { Box } from "@mui/material";
import { useState } from "react";
import Navbar from "../components/navbar/Navbar";

import { Outlet } from "react-router";

export type displayedColumn = "profile" | "posts" | "follows";

const Main = () => {
  // const [displayedColumn, setDisplayedColumn] =
  //   useState<displayedColumn>("posts");

  // const changeColumn = (column: displayedColumn): void => {
  //   displayedColumn !== column && setDisplayedColumn(column);
  // };

  // // function for checking which one column should be displayed now and setting the visibility on mobiles (posts visible by default)
  // const checkVisibility = (column: displayedColumn) => {
  //   return displayedColumn === column ? "block" : "none";
  // };

  return (
    <>
      <Navbar />
      <Box mx={{ xs: 1, md: 8 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default Main;
