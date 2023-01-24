import axios from "axios";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { setLogin, setLogout } from "../store/authSlice";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const navigate = useNavigate();

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

export default useAuth;
