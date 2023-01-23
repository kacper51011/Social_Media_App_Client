import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { User } from "../store/authSlice";

const useFetchedUser = () => {
  const { id } = useParams();
  const [fetchedUser, setFetchedUser] = useState<User | null>(null);

  const fetchUser = async () => {
    console.log("asdasd");
    try {
      const data = await axios.get(`/api/user/getUser/${id}`);
      setFetchedUser(data.data.user as User);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);
  return fetchedUser;
};

export default useFetchedUser;
