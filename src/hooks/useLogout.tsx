import axios from "axios";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogout } from "../store/authSlice";
import { useAppSelector } from "./reduxHooks";

const useLogout = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      axios.delete("/api/user/logout");
      dispatch(setLogout());
      navigate("/");
    } catch (err) {}
  };

  return logout;
};

export default useLogout;
