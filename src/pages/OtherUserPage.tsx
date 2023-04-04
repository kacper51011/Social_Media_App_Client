import { UserCard } from "../components/column user/UserCard";
import { UserPageContainer } from "../shared/components/UserPageContainer";
import { PostsList } from "../features/post/load/components/PostsList";
import { FollowsCard } from "src/features/follows";
import { useFetchedUser } from "@hooks";
import { CustomSkeleton } from "@components";

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
