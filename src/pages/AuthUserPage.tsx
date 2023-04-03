import { PostInputComponent } from "../components/columnPosts/PostInputComponent";
import { UserCard } from "../components/column user/UserCard";
import { PostsList } from "../components/columnPosts/PostsList";
import { UserPageContainer } from "../shared/components/UserPageContainer";
import { useAppSelector } from "../shared/hooks/reduxHooks";
import { SearchComponent } from "../components/columnPosts/SearchComponent";
import { useState } from "react";
import { FollowsCard } from "src/features/follows";

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
      followsColumn={<FollowsCard follows={followings} />}
    />
  );
};
