import { CreatePostInput } from "../features/post/add/CreatePostInput";
import { UserCard } from "../features/user/UserCard";
import { PostsList } from "../features/post/load/components/PostsList";
import { UserPageContainer } from "../shared/components/UserPageContainer";
import { useAppSelector } from "../shared/hooks/reduxHooks";
import { SearchComponent } from "../features/search/SearchComponent";
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
          <CreatePostInput />

          <PostsList route="/api/post/getPosts" query={search} />
        </>
      }
      followsColumn={<FollowsCard follows={followings} />}
    />
  );
};
