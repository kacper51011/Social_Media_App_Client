import FollowsContainer from "../components/column follows/FollowsContainer";
import PostInputComponent from "../components/column posts/PostInputComponent";
import UserCard from "../components/column user/UserCard";
import UserPageContainer from "../components/UserPageContainer";
import { useAppSelector } from "../hooks/reduxHooks";

import { displayedColumn } from "./Main";

type Props = {
  checkVisibility: (column: displayedColumn) => "block" | "none";
};

const AuthUserPage = ({ checkVisibility }: Props) => {
  const followings = useAppSelector((state) => state.auth.user?.following);
  const posts = useAppSelector((state) => state.posts.posts);
  const user = useAppSelector((state) => state.auth.user);

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
      postsColumn={
        <>
          <PostInputComponent />
        </>
      }
      followsColumn={<FollowsContainer />}
    />
  );
};

export default AuthUserPage;
