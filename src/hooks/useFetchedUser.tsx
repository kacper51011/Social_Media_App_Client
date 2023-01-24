import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { User } from "../store/authSlice";

const useFetchedUser = () => {
  const { id } = useParams();
  const [loadingUser, setLoadingUser] = useState(true);
  const [error, setError] = useState(false);
  const [fetchedUser, setFetchedUser] = useState<User | null>(null);

  const fetchUser = async () => {
    try {
      setLoadingUser(true);
      setError(false);
      const data = await axios.get(`/api/user/getUser/${id}`);
      setFetchedUser(data.data.user as User);
    } catch (err) {
      setError(true);
    }
    setLoadingUser(false);
  };

  useEffect(() => {
    fetchUser();
  }, [id]);
  return [fetchedUser, loadingUser, error] as const;
};

export default useFetchedUser;
