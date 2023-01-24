import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

import { deleteLoadedPosts, setNewPosts } from "../store/postsSlice";

// Hook made for fetching and preparing data about posts

const usePostsLoad = (url: string) => {
  const [page, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  const { id } = useParams();

  const controller = new AbortController();

  const dispatch = useDispatch();

  const getData = async () => {
    try {
      setLoading(true);
      setError(false);

      let idParams = id ? `/${id}/` : "/";

      const response = await axios({
        url: `${url}${idParams}${page}`,
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
  }, [page, url, id]);

  useEffect(() => {
    return () => {
      setPageNumber(1);
      dispatch(deleteLoadedPosts());
    };
  }, [url, id]);

  return { loading, error, hasMore, setPageNumber };
};

export default usePostsLoad;
