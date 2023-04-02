import { TransitionGroup } from "react-transition-group";
import { FollowedPersonItem } from "../components/column follows/FollowedPersonItem";
import { FollowsContainer } from "../components/column follows/FollowsContainer";
import { PostInputComponent } from "../components/columnPosts/PostInputComponent";
import { UserCard } from "../components/column user/UserCard";
import { PostsList } from "../components/columnPosts/PostsList";
import { UserPageContainer } from "../shared/components/UserPageContainer";
import { useAppSelector } from "../shared/hooks/reduxHooks";
import { Collapse } from "@mui/material";
import { SearchComponent } from "../components/columnPosts/SearchComponent";
import { useState } from "react";
import { Following } from "@store";

export const AuthUserPage = () => {
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
                followings.map((following: Following) => {
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
