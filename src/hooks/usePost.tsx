import axios from "axios";
import { MouseEventHandler } from "react";
import { useDispatch } from "react-redux";
import { Post } from "../components/column posts/PostItem";
import { follow, likePost, unfollow, unlikePost } from "../store/authSlice";
import { addLikeForPost, removeLikeFromPost } from "../store/postsSlice";
import { useAppSelector } from "./reduxHooks";

type Props = Pick<
  Post,
  "userId" | "firstName" | "lastName" | "job" | "userPicturePath" | "id"
> & {
  doUserFollowAuthor: boolean;
  doUserLikePost: boolean;
};

const usePost = ({
  userId,
  firstName,
  lastName,
  userPicturePath,
  job,
  id,
  doUserFollowAuthor,
  doUserLikePost,
}: Props) => {
  const dispatch = useDispatch();
  const authUser = useAppSelector((state) => state.auth.user!);

  const followUnfollow: MouseEventHandler<HTMLButtonElement> = async () => {
    try {
      await axios.patch("/api/user/follow", {
        id: authUser!.id,
        userToFollowId: userId,
      });
    } catch (err) {
      return;
    }
    doUserFollowAuthor
      ? dispatch(unfollow(userId))
      : dispatch(
          follow({
            id: userId,
            firstName: firstName,
            lastName: lastName,
            picturePath: userPicturePath,
            job: job,
          })
        );
  };

  // function responsible for leaving a like or unliking the post
  const likeUnlike: MouseEventHandler<HTMLButtonElement> = async () => {
    try {
      await axios.patch("/api/post/likePost", {
        userId: authUser!.id,
        postId: id,
      });
    } catch (err) {
      return;
    }
    doUserLikePost
      ? dispatch(removeLikeFromPost({ postId: id, id: authUser.id }))
      : dispatch(addLikeForPost({ postId: id, id: authUser.id }));
    doUserLikePost ? dispatch(unlikePost(id)) : dispatch(likePost(id));
  };

  return { likeUnlike, followUnfollow };
};

export default usePost;
