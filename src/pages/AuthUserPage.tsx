import { UserPageContainer } from "@components";
import { useAppSelector } from "@hooks";
import { useState } from "react";
import { FollowsCard } from "src/features/follows";
import { CreatePostInput, PostsList } from "src/features/post";
import { SearchComponent } from "src/features/search";
import { UserCard } from "src/features/user";

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
