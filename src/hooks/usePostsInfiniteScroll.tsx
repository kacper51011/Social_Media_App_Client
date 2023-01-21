import { useRef, useCallback } from "react";

import React from "react";
type Props = {
  loading: Boolean;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  hasMore: Boolean;
};

const usePostsInfiniteScroll = ({ loading, setPageNumber, hasMore }: Props) => {
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
    [loading, hasMore]
  );

  return lastPostElementRef;
};

export default usePostsInfiniteScroll;
