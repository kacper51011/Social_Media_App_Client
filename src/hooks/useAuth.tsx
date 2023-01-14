import axios from "axios";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { setLogin, setLogout } from "../store/authSlice";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  const dispatch = useDispatch();
  const controller = new AbortController();
  const checkIsLoggedIn = async () => {
    try {
      const response = await axios.get("/api/user/checkIsVerified", {
        signal: controller.signal,
      });
      if (response.data.status === "failed") {
        dispatch(setLogout());
        localStorage.clear();
        setIsLoggedIn(false);
      } else {
        dispatch(setLogin(response.data.user));
        setIsLoggedIn(true);
      }
    } catch (err) {
      dispatch(setLogout());
      localStorage.clear();
      setIsLoggedIn(false);
    }
    return controller.abort();
  };

  useEffect(() => {
    checkIsLoggedIn();
  }, [isLoggedIn]);
};
// todo: this hook connected to backend getUser, apply it on app, navigation from home to main

export default useAuth;
