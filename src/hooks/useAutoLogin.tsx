import React, { useEffect } from "react";

import authSlice from "../store/authSlice";
import { useAppDispatch, useAppSelector } from "./reduxHooks";

const useAutoLogin = () => {
  const dispatch = useAppDispatch();
  const userSelector = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    return () => {
      second;
    };
  }, [third]);
};
// todo: this hook connected to backend getUser, apply it on app, navigation from home to main

export default useAutoLogin;
