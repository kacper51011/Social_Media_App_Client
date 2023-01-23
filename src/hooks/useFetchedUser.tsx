import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "../store/authSlice";

const useFetchedUser = (id: string) => {
  const [fetchedUser, setFetchedUser] = useState<User | null>(null);

  const fetchUser = async () => {
    try {
      const data = await axios.get(`/api/user/getUser/${id}`);
      setFetchedUser(data.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return fetchedUser;
};

export default useFetchedUser;
