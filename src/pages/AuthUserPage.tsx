import { TransitionGroup } from "react-transition-group";
import FollowedPersonItem from "../components/column follows/FollowedPersonItem";
import FollowsContainer from "../components/column follows/FollowsContainer";
import PostInputComponent from "../components/column posts/PostInputComponent";
import UserCard from "../components/column user/UserCard";
import PostsList from "../components/column posts/PostsList";
import UserPageContainer from "../components/shared/UserPageContainer";
import { useAppSelector } from "../hooks/reduxHooks";
import { Collapse } from "@mui/material";
import SearchComponent from "../components/column posts/SearchComponent";
import { useState } from "react";

const AuthUserPage = () => {
  const [search, setSearch] = useState<string | null>(null);
  const followings = useAppSelector((state) => state.auth.user?.following);
  const user = useAppSelector((state) => state.auth.user);

  return (
    <UserPageContainer
      profileColumn={
        <>
          <UserCard user={user!} />
        </>
      }
      postsColumn={
        <>
          <SearchComponent setSearch={setSearch} query={search} />
          <PostInputComponent />

          <PostsList route="/api/post/getPosts" query={search} />
        </>
      }
      followsColumn={
        <FollowsContainer
          childrens={
            <TransitionGroup>
              {followings &&
                followings.map((following) => {
                  return (
                    <Collapse key={following.id} collapsedSize={1}>
                      <FollowedPersonItem followedPerson={following} />
                    </Collapse>
                  );
                })}
            </TransitionGroup>
          }
        />
      }
    />
  );
};

export default AuthUserPage;
