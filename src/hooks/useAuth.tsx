import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";

import { useDispatch } from "react-redux";

import { setLogin, setLogout } from "../store/authSlice";
import { useAppSelector } from "./reduxHooks";
import useLogout from "./useLogout";

const useAuth = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const controller = new AbortController();
  const isLoggedIn = async () => {
    try {
      const response = await axios.get("/api/user/checkIsVerified", {
        signal: controller.signal,
      });
    } catch (err) {
      dispatch(setLogout());

      localStorage.clear();
    }
    return controller.abort();
  };
  isLoggedIn();
};
// todo: this hook connected to backend getUser, apply it on app, navigation from home to main

export default useAuth;
