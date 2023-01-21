import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { deleteLoadedPosts, setNewPosts } from "../store/postsSlice";

// I made the decision about two loading states, caused by two different animations on first load and every other ones

const usePostsLoad = (url: string, page: number) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [hasMore, setHasMore] = useState(false);
  const controller = new AbortController();

  const dispatch = useDispatch();

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

      dispatch(setNewPosts(response.data.posts));
      setHasMore(response.data.posts.length > 0);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(true);
    }
    return controller.abort();
  };

  useEffect(() => {
    getData();
  }, [page, url]);

  useEffect(() => {
    return () => {
      dispatch(deleteLoadedPosts());
    };
  }, []);

  return { loading, error, hasMore };
};

export default usePostsLoad;
