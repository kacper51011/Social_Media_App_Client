import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Comment, Post } from "../components/column posts/PostItem";
import { deleteLoadedPosts, setNewPosts } from "../store/postsSlice";

// I made the decision about two loading states, caused by two different animations on first load and every other ones

const usePostsLoad = (url: string, page: number) => {
  const [firstLoad, setFirstLoad] = useState(true);
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
      setFirstLoad(false);
    } catch (err) {
      console.log(err);
      setError(true);

      setFirstLoad(false);
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

  return { firstLoad, loading, error, hasMore };
};

export default usePostsLoad;
