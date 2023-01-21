import { useCallback, useRef, useState } from "react";
import { useAppSelector } from "../hooks/reduxHooks";
import usePostsLoad from "../hooks/usePostsLoad";
import PostItem from "./column posts/PostItem";
import CustomSkeleton from "./CustomSkeleton";

type Props = {
  route: string;
};

const PostsList = ({ route }: Props) => {
  const posts = useAppSelector((state) => state.posts.posts);
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, hasMore } = usePostsLoad(
    `${route}/${pageNumber}`,
    pageNumber
  );

  const observer = useRef<IntersectionObserver>();
  const lastPostElementRef = useCallback(
    (node: Element) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, hasMore]
  );

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
