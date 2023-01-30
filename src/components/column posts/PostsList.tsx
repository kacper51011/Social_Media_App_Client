import { useAppSelector } from "../../hooks/reduxHooks";
import usePostsInfiniteScroll from "../../hooks/usePostsInfiniteScroll";
import usePostsLoad from "../../hooks/usePostsLoad";
import PostItem from "./PostItem";
import CustomSkeleton from "../CustomSkeleton";
import ImageWithText from "../ImageWithText";
import { ReactComponent as NoMorePosts } from "../../utils/NoMorePosts.svg";
import { ReactComponent as PostsError } from "../../utils/PostsError.svg";
import { ReactComponent as EmptyPostsList } from "../../utils/EmptyPostsList.svg";
import { useTranslation } from "react-i18next";

type Props = {
  route: string;
  query?: string | null;
};

const PostsList = ({ route, query }: Props) => {
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

export default PostsList;
