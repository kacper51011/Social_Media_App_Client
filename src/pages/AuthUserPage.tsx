import { useState } from "react";
import { useOutletContext } from "react-router";
import FollowedPersonItem from "../components/column follows/FollowedPersonItem";
import FollowsContainer from "../components/column follows/FollowsContainer";
import PostInputComponent from "../components/column posts/PostInputComponent";
import UserCard from "../components/column user/UserCard";
import PostsList from "../components/PostsList";
import UserPageContainer from "../components/UserPageContainer";
import { useAppSelector } from "../hooks/reduxHooks";
import usePostsLoad from "../hooks/usePostsLoad";

import { displayedColumn } from "./Main";

const AuthUserPage = () => {
  const followings = useAppSelector((state) => state.auth.user?.following);
  const checkVisibility: (column: displayedColumn) => "block" | "none" =
    useOutletContext();

  const user = useAppSelector((state) => state.auth.user);

  return (
    <UserPageContainer
      checkVisibility={checkVisibility}
      profileColumn={
        <UserCard
          photo={user!.picturePath}
          firstName={user!.firstName}
          lastName={user!.lastName}
          location={user!.location}
          followedPeopleNumber={user!.followingIDs.length}
          job={user!.job}
          numberOfLikes={10}
          numberOfProfileViews={user!.viewsProfile}
        />
      }
      postsColumn={
        <>
          <PostInputComponent />
          <PostsList route="/api/post/getPosts/" />
        </>
      }
      followsColumn={
        <FollowsContainer
          childrens={
            followings &&
            followings.map((following) => {
              return (
                <FollowedPersonItem
                  key={following.id}
                  id={following.id}
                  photo={following.picturePath}
                  firstName={following.firstName}
                  lastName={following.lastName}
                  job={following.job}
                />
              );
            })
          }
        />
      }
    />
  );
};

export default AuthUserPage;
