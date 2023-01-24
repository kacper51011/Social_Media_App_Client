import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { deleteLoadedPosts, setNewPosts } from "../store/postsSlice";

// Hook made for fetching and preparing data about posts

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
