import { Grid, Box } from "@mui/material";
import { useCallback, useRef, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import PostItem from "../components/column posts/PostItem";
import UserCard from "../components/column user/UserCard";
import FollowedPersonItem from "../components/column follows/FollowedPersonItem";
import FollowsContainer from "../components/column follows/FollowsContainer";
import PostInputComponent from "../components/column posts/PostInputComponent";
import usePostsLoad from "../hooks/usePostsLoad";
import CustomSkeleton from "../components/CustomSkeleton";
import { useAppSelector } from "../hooks/reduxHooks";
import { Outlet } from "react-router";

export type displayedColumn = "profile" | "posts" | "follows";

const Main = () => {
  const [displayedColumn, setDisplayedColumn] =
    useState<displayedColumn>("posts");

  const changeColumn = (column: displayedColumn): void => {
    displayedColumn !== column && setDisplayedColumn(column);
  };

  // function for checking which one column should be displayed now and setting the visibility on mobiles (posts visible by default)
  const checkVisibility = (column: displayedColumn) => {
    return displayedColumn === column ? "block" : "none";
  };

  return (
    <>
      <Navbar changeColumn={changeColumn} />
      <Box mx={{ xs: 1, md: 8 }}>
        <Outlet context={checkVisibility} />
      </Box>
    </>
  );
};

export default Main;
