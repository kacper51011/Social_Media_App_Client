import { PostItem } from "../../card/PostItem";
import { useAppSelector } from "@hooks";
import { RefAttributes } from "react";
import {
  EmptyListInfo,
  LoadSkeleton,
  NoMorePostsInfo,
  ErrorInfo,
} from "./components";
import { Post } from "@types";
import { usePostsInfiniteScroll } from "./usePostsInfiniteScroll";
import { usePostsLoad } from "./usePostsLoad";
import { Box } from "@mui/material";

type Props = {
  route: string;
  query?: string | null;
};

export const PostsList = ({ route, query }: Props) => {
  // it always use the postsSlice (it resets anytime someone leave current page/change selected cause of the usePostsLoad hook logic)
  const posts = useAppSelector((state) => state.posts.posts);

  const { loading, error, hasMore, setPageNumber } = usePostsLoad(
    `${route}`,
    query
  );

  const lastPostElementRef = usePostsInfiniteScroll({
    loading,
    setPageNumber,
    hasMore,
  });

  const allPostsLoaded = !hasMore && !loading && !error && posts.length > 0;
  const PostsListIsEmpty = !hasMore && !error && !loading && posts.length === 0;

  return (
    <Box role="main">
      {posts.map(
        (
          post: JSX.IntrinsicAttributes &
            Post &
            RefAttributes<Element | undefined>,
          index: number
        ) => {
          if (posts.length === index + 1) {
            return (
              <PostItem ref={lastPostElementRef} key={post.id} {...post} />
            );
          } else {
            return <PostItem key={post.id} {...post} />;
          }
        }
      )}
      <LoadSkeleton showOn={loading} />
      <ErrorInfo showOn={error} />
      <NoMorePostsInfo showOn={allPostsLoaded} />
      <EmptyListInfo showOn={PostsListIsEmpty} />
    </Box>
  );
};
