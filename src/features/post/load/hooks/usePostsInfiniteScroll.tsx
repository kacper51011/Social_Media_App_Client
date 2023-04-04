import { useRef, useCallback, SetStateAction, Dispatch } from "react";

type Props = {
  loading: Boolean;
  setPageNumber: Dispatch<SetStateAction<number>>;
  hasMore: Boolean;
};

export const usePostsInfiniteScroll = ({
  loading,
  setPageNumber,
  hasMore,
}: Props) => {
  // loading logic is implemented in usePostsLoad, this hook is dependent on usePostsLoad, but include additional logic with infinite scroll
  //   I decided to separate both codes because 1. They do other things even if one is dependent on other 2. It looks a bit more readable in my opinion.
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loading, hasMore]
  );

  return lastPostElementRef;
};
