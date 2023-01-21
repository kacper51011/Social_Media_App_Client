import { useCallback, useRef, useState } from "react";
import { useAppSelector } from "../hooks/reduxHooks";
import usePostsInfiniteScroll from "../hooks/usePostsInfiniteScroll";
import usePostsLoad from "../hooks/usePostsLoad";
import PostItem from "./column posts/PostItem";
import CustomSkeleton from "./CustomSkeleton";

type Props = {
  route: string;
};

const PostsList = ({ route }: Props) => {
  // it always use the postsSlice (it resets anytime someone leave current page/change selected cause of the usePostsLoad hook logic)

  const posts = useAppSelector((state) => state.posts.posts);
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, hasMore } = usePostsLoad(
    `${route}/${pageNumber}`,
    pageNumber
  );

  const lastPostElementRef = usePostsInfiniteScroll({
    loading,
    setPageNumber,
    hasMore,
  });

  return (
    <>
      {posts.map((post, index) => {
        if (posts.length === index + 1) {
          return <PostItem ref={lastPostElementRef} key={post.id} {...post} />;
        } else {
          return <PostItem key={post.id} {...post} />;
        }
      })}
      {loading && <CustomSkeleton width="100%" height="30vw" />}
      {loading && <CustomSkeleton width="100%" height="30vw" />}
      {loading && <CustomSkeleton width="100%" height="30vw" />}
    </>
  );
};

export default PostsList;
