import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { Comment, Post } from "../components/column posts/PostItem";

// I made the decision about two loading states, caused by two different animations on first load and every other ones

const usePostsLoad = (url: string, page: number) => {
  const [firstLoad, setFirstLoad] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const controller = new AbortController();

  const getData = async () => {
    try {
      setLoading(true);
      setError(false);

      const response = await axios({
        url: url,
        method: "GET",

        signal: controller.signal,
      });
      console.log(response.data);
      setPosts((posts) => {
        return [...posts, ...response.data.posts];
      });
      setHasMore(response.data.posts.length > 0);
      setLoading(false);
      setFirstLoad(false);
    } catch (err) {
      console.log(err);
      setError(true);

      setFirstLoad(false);
    }
    controller.abort();
  };

  useEffect(() => {
    getData();

    return;
  }, [page, url]);

  return { firstLoad, loading, error, posts, hasMore };
};

export default usePostsLoad;
