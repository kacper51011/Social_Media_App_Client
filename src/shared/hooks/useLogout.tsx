import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogout } from "../../store/authSlice";

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      axios.delete("/api/user/logout");
      dispatch(setLogout());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return logout;
};
