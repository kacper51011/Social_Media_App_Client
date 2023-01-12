import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLogin } from "../store/authSlice";

const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const isLoggedIn = async () => {
      const controller = new AbortController();
      try {
        const response = await axios({
          url: "http://localhost:3001/api/user/checkIsVerified",
          method: "GET",
          signal: controller.signal,
        });
        dispatch(setLogin(response.data.user));
      } catch (err) {
        controller.abort();
        console.log(err);
      }
    };
    isLoggedIn();
  }, []);
};
// todo: this hook connected to backend getUser, apply it on app, navigation from home to main

export default useAuth;
