import { displayedColumn } from "./Main";
import { useOutletContext, useParams } from "react-router";
import FollowsContainer from "../components/column follows/FollowsContainer";
import UserCard from "../components/column user/UserCard";
import UserPageContainer from "../components/UserPageContainer";
import PostsList from "../components/PostsList";
import useFetchedUser from "../hooks/useFetchedUser";

const OtherUserPage = () => {
  const { id } = useParams();
  const checkVisibility: (column: displayedColumn) => "block" | "none" =
    useOutletContext();
  const foundUser = useFetchedUser(id as string);

  return (
    <UserPageContainer
      checkVisibility={checkVisibility}
      profileColumn={
        <UserCard
          photo={foundUser!.picturePath}
          firstName={foundUser!.firstName}
          lastName={foundUser!.lastName}
          followedPeopleNumber={foundUser!.followingIDs.length}
          location={foundUser!.location}
          job={foundUser!.job}
          numberOfProfileViews={foundUser!.viewsProfile}
          numberOfLikes={0}
        />
      }
      postsColumn={<PostsList route={`/api/post/getUserPosts/${id}`} />}
      followsColumn={<FollowsContainer />}
    />
  );
};

export default OtherUserPage;
