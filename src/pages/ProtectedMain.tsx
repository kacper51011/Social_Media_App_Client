import { Navigate } from "react-router";
import { useAppSelector } from "../hooks/reduxHooks";
import Main from "./Main";

const ProtectedMain = () => {
  const user = useAppSelector((state) => state.auth.user);
  // useAuth();

  return user ? <Main /> : <Navigate to="/" />;

  // return user ? <Outlet /> : <Home />;
};

export default ProtectedMain;
