import { UserPageContainer } from "@components";
import { FollowsCard } from "src/features/follows";
import { useFetchedUser } from "@hooks";
import { CustomSkeleton } from "@components";
import { PostsList } from "src/features/post";
import { UserCard } from "src/features/user";

export const OtherUserPage = () => {
  const [fetchedUser, loadingUser] = useFetchedUser();

  return (
    <UserPageContainer
      profileColumn={
        <>
          {loadingUser && <CustomSkeleton height="30vh" width="100%" />}
          {fetchedUser && <UserCard user={fetchedUser} />}
        </>
      }
      postsColumn={<PostsList route={`/api/post/getUserPosts`} />}
      followsColumn={
        <>
          {loadingUser && <CustomSkeleton height="35vh" width="100%" />}
          {fetchedUser && <FollowsCard follows={fetchedUser.following} />}
        </>
      }
    />
  );
};
