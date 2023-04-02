import { Post, PostItem } from "./PostItem";
import { NoMorePosts, PostsError, EmptyPostsList } from "@assets";
import { CustomSkeleton, ImageWithText } from "@components";
import { useAppSelector, usePostsLoad, usePostsInfiniteScroll } from "@hooks";
import { RefAttributes } from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("imagesWithText");

  const lastPostElementRef = usePostsInfiniteScroll({
    loading,
    setPageNumber,
    hasMore,
  });

  return (
    <>
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
      {loading && <CustomSkeleton width="100%" height="30vw" />}
      {loading && <CustomSkeleton width="100%" height="30vw" />}
      {loading && <CustomSkeleton width="100%" height="30vw" />}

      {error && (
        <ImageWithText
          content={t("error")}
          image={<PostsError width={0.5} height={0.3} />}
          width="100%"
          height="30vw"
        />
      )}
      {!hasMore && !loading && !error && posts.length > 0 && (
        <ImageWithText
          content={t("noMore")}
          image={<NoMorePosts />}
          width="100%"
          height="30vw"
        />
      )}
      {!hasMore && !error && !loading && posts.length === 0 && (
        <ImageWithText
          content={t("noPosts")}
          image={<EmptyPostsList />}
          width="100%"
          height="30vh"
        />
      )}
    </>
  );
};
