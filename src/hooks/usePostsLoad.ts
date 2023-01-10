import axios from "axios";
import { useState, useEffect, useCallback } from "react";

type Props = {
  url: string;
  page: number;
};

type Post = {
  id: string;
};

const usePostsLoad = ({ url, page }: Props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    try {
      const { data } = axios.get(url);
    } catch (err) {}
  }, [url, page]);
};

export default usePostsLoad;
