import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { User } from "@types";

export const useFetchedUser = () => {
  const { id } = useParams();
  const [loadingUser, setLoadingUser] = useState(true);
  const [error, setError] = useState(false);
  const [fetchedUser, setFetchedUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const controller = new AbortController();

  const fetchUser = async () => {
    try {
      setLoadingUser(true);
      setError(false);
      const data = await axios.get(`/api/user/getUser/${id}`, {
        signal: controller.signal,
      });
      setFetchedUser(data.data.user as User);
    } catch (err) {
      navigate("*");
    }
    setLoadingUser(false);
  };

  useEffect(() => {
    fetchUser();

    return setFetchedUser(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return [fetchedUser, loadingUser, error] as const;
};
