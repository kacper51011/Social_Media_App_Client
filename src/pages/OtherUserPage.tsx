import { useState } from "react";
import { displayedColumn } from "./Main";
import { useParams } from "react-router";
import FollowsContainer from "../components/column follows/FollowsContainer";
import UserCard from "../components/column user/UserCard";
import UserPageContainer from "../components/UserPageContainer";

type Props = {
  checkVisibility: (column: displayedColumn) => "block" | "none";
};

const OtherUserPage = ({ checkVisibility }: Props) => {
  let params = useParams();

  return (
    <UserPageContainer
      checkVisibility={checkVisibility}
      profileColumn={
        <UserCard
          photo={""}
          firstName={""}
          lastName={""}
          followedPeopleNumber={0}
          location={""}
          job={""}
          numberOfProfileViews={0}
          numberOfLikes={0}
        />
      }
      postsColumn={<></>}
      followsColumn={<FollowsContainer />}
    />
  );
};

export default OtherUserPage;
