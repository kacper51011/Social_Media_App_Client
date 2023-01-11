import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { setLogin } from "../store/authSlice";

type Post = {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  location: string;
  description: string;
  userPicturePath: string;
  picturePath: string;
  likes: string[];
  comments: Comment[];
  commentsIds: string[];
};

// I made the decision about two loading states, caused by two different animations on first load and every other ones

const usePostsLoad = (url: string, page: number) => {
  const [firstLoad, setFirstLoad] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    const getData = async () => {
      try {
        const response = await axios({
          url: url,
          method: "GET",
          params: { page: page },
          signal: controller.signal,
        });
        setPosts((posts) => [...posts, ...response.data.posts]);
        setHasMore(response.data.posts.length > 0);
        setLoading(false);
        setFirstLoad(false);
      } catch (err) {
        setError(true);
        setLoading(false);
        setFirstLoad(false);
      }
    };

    return controller.abort();
  }, [url, page]);

  return { firstLoad, loading, error, posts, hasMore };
};

export default usePostsLoad;
