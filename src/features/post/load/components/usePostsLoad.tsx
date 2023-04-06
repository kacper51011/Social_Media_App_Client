import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

import { deleteLoadedPosts, setNewPosts } from "../../../../store/postsSlice";

// Hook made for fetching and preparing data about posts

export const usePostsLoad = (url: string, query?: string | null) => {
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
      let queryParams = query ? `?search=${query}` : "";
      let idParams = id ? `/${id}/` : "/";
      let combinedUrl = `${url}${idParams}${page}${queryParams}`;

      const response = await axios({
        url: combinedUrl,
        method: "GET",

        signal: controller.signal,
      });

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, url, id, query]);

  useEffect(() => {
    return () => {
      setPageNumber(1);
      dispatch(deleteLoadedPosts());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, id, query]);

  return { loading, error, hasMore, setPageNumber };
};
