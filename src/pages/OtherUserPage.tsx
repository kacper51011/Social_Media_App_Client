import { displayedColumn } from "./Main";
import { useOutletContext } from "react-router";
import FollowsContainer from "../components/column follows/FollowsContainer";
import UserCard from "../components/column user/UserCard";
import UserPageContainer from "../components/UserPageContainer";
import PostsList from "../components/PostsList";
import useFetchedUser from "../hooks/useFetchedUser";
import FollowedPersonItem from "../components/column follows/FollowedPersonItem";
import { following } from "../store/authSlice";
import CustomSkeleton from "../components/CustomSkeleton";

const OtherUserPage = () => {
  const checkVisibility: (column: displayedColumn) => "block" | "none" =
    useOutletContext();

  const [fetchedUser, loadingUser, error] = useFetchedUser();

  return (
    <UserPageContainer
      checkVisibility={checkVisibility}
      profileColumn={
        <>
          {loadingUser && <CustomSkeleton height="30vh" width="100%" />}
          {fetchedUser && (
            <UserCard
              photo={fetchedUser!.picturePath}
              firstName={fetchedUser!.firstName}
              lastName={fetchedUser!.lastName}
              followedPeopleNumber={fetchedUser!.followingIDs.length}
              location={fetchedUser!.location}
              job={fetchedUser!.job}
              numberOfProfileViews={fetchedUser!.viewsProfile}
              numberOfLikes={0}
            />
          )}
        </>
      }
      postsColumn={
        <PostsList route={`/api/post/getUserPosts/${fetchedUser?.id}`} />
      }
      followsColumn={
        <>
          {loadingUser && <CustomSkeleton height="35vh" width="100%" />}
          {fetchedUser && (
            <FollowsContainer
              childrens={fetchedUser.following.map((following: following) => {
                return (
                  <FollowedPersonItem
                    key={following.id}
                    id={following.id}
                    photo={following.picturePath}
                    firstName={following.firstName}
                    lastName={following.lastName}
                    job={following.job}
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

export default OtherUserPage;
