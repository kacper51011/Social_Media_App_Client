import { FollowsContainer } from "../components/column follows/FollowsContainer";
import { UserCard } from "../components/column user/UserCard";
import { UserPageContainer } from "../components/shared/UserPageContainer";
import { PostsList } from "../components/column posts/PostsList";
import { useFetchedUser } from "../hooks/useFetchedUser";
import { FollowedPersonItem } from "../components/column follows/FollowedPersonItem";
import { Following } from "../store/authSlice";
import { CustomSkeleton } from "../components/shared/CustomSkeleton";

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
          {fetchedUser && (
            <FollowsContainer
              childrens={fetchedUser.following.map((following: Following) => {
                return (
                  <FollowedPersonItem
                    key={following.id}
                    followedPerson={following}
                  />
                );
              })}
            />
          )}
        </>
      }
    />
  );
};
